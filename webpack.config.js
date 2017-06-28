var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
var argv = require("yargs").argv; //命令行参数解析
var isPro = argv.env.trim() === 'production' ////解析到命令行内有prodiction字段

function resolve(dir) { //拼接为绝对路径用
    return path.resolve(_dirname, dir);
}
var needHand = [resolce("src"), resolve('node_modules/vuex'), resolve('node_modules/jquery'), resolve('vue-resource')]
var plugins = [
    new webpack.DefinePlugin({ ////去除对warning和一些提示信息的代码
        'process.env': {
            NODE_ENV: `"${argv.env.trim()}"`
        }
    }),
    new webpack.BannerPlugin("This file is created by xiixi"),
    new ExTractTextPlugin({
        filename: isPro ? 'css/[name].[contenthash].css' : '[name].[contenthash].css',
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: 'true',
        filename: resolve("dist/index.html"),
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        }
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: 'jquery',
        "window.jQuery": 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: "vender",
        minChunks: function(module, count) {
            return (
                module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(
                    path.join(__dirname, "node_modules")
                ) === 0
            )
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: "mainfest",
        chunk: ["vender"]
    })

];

if (isPro) {
    plugins = Array.prototype.concat.call(plugins, [
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: isPro,
                drop_debugger: isPro
            },
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ])
}
module.exports = {
    entry: ["babel-polyfill", resolve("src/app.js")],
    output: {
        path: isPro ? resolve("dist/assets") : resolve("dist"), //打包文件输出路径管理
        publicPath: isPro ? "/bbs/assets" : "", //静态资源文件copy管理
        filename: isPro ? "js/[name].[chunkhash].js" : "[name].[hash].js", //输出文件名管理
        chunkFilename: isPro ? "js/[name].[chunkhash].js" : "[name].[chunkhash].js" //异步按需加载所需
    },
    module: {
        rules: [{ //代码检查
            test: /\.(js|vue)$/,
            use: 'eslint-loader',
            enforce: 'pre',
            include: [resolve('src')],
            exclude: [/(node_module)/]
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            option: {
                loaders: {
                    sass: ExTractTextPlugin.extract({
                        fallback: 'vue-style-loader',
                        use: [{
                            loader: 'css-loader'
                        }, {
                            loader: 'sass-loader',
                            option: {
                                indentedSyntax: true
                            }
                        }]
                    })
                }
            }
        }, {
            test: /\.sass$/,
            use: ExTractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            indentedSyntax: true
                        }
                    }
                ]
            })
        }, {
            test: /\.css$/,
            use: ExTractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader'
                ]
            })
        }, {
            test: /\.(png|jpe?g|gif)/
        }]
    }
}
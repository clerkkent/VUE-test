<template>
    <div class="first" @click="getdata">
        {{hhe}}
        <div>
            {{content}}
        </div>
        <ul>
            <li v-for="item in count">
                <p>{{item.title}}</p>
                <img v-bind:src="item.thumbnail_pic_s" alt="">
            </li>
        </ul>
        <router-view></router-view>
        <Button type="primary" shape="circle" icon="ios-search"></Button>
        <Button type="primary" icon="ios-search">搜索</Button>
        <Button type="primary" shape="circle" icon="ios-search">搜索</Button>
        <Button type="primary" shape="circle">圆角按钮</Button>
        <Slider v-model="value" range></Slider>

        <popum></popum>
    </div>
</template>
<script>
    import bus from '../bus'
    import store from '../store/state'
    import router from '../router/router'
    import popom from './popum'
    export default {
        components: {
            popom
        },
        props: {
            id: {
                type: Number
            }
        },
        data() {
            return {
                show: false,
                content: 'x',
                num: 200,
                hhe: 'fuck',
                value: [20, 50]
            }
        },
        methods: {
            dosomething() {
                this.content = "混合"
                router.push({
                    path: '/second',
                    query: {
                        userId: 123
                    }
                }) //栈导航 显性传参可改为name隐形传参
            },
            getdata() {
                this.$store.dispatch("indexinfo");
                console.log(this.$store.state.index)
            }
        },
        computed: {
            count() {
                return this.$store.state.index.dataa
            }
        }
    }
</script>
<style lang="sass" scoped>
     .first{
         background:red;
     }
</style>
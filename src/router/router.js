import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = resolve => require(['../components/index'], resolve)
const Second = resolve => require(['../components/second'], resolve)
const Bar = resolve => require(['../components/Bar'], resolve)
const Baz = resolve => require(['../components/Baz'], resolve)
const isPro = process.env.NODE_ENV.trim() === 'production'
Vue.use(VueRouter);
const routerConfig = {
    mode: isPro ? 'history' : 'hash',
    base: '/bbs/',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    },
    routes: [{
            path: '/x',
            name: 'de',
            props: { name: 'name' },
            components: {
                default: Index,
                a: Bar,
                b: Baz
            }
        },
        { path: '/index', name: 'index', props: { name: 'name' }, component: Index },
        { path: '/second', name: 'second', props: { name: 'name' }, component: Second }
    ]
}
const router = new VueRouter(routerConfig)
export default router
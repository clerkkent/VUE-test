import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = resolve => require(['../components/index'], resolve)
const Second = resolve => require(['../components/second'], resolve)
Vue.use(VueRouter);
const routerConfig = {
    mode: isPro ? 'history' : 'hash',
    base: '/bbs/',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    },
    routes: [
        { path: '/', name: 'index', props: { name: 'name' }, component: Index },
        { path: '/second', name: 'second', props: { name: 'name' }, component: Second }
    ]
}
const router = new VueRouter(routerConfig)
export default router
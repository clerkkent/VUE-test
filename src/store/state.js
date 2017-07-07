import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
Vue.use(Vuex)
const store = new Vuex.Store({
    // state: {
    //     count: 0
    // },
    // mutations: {
    //     increment(state) {
    //         state.count++
    //     },
    //     reduce(state) {
    //         state.count = 100
    //     }
    // }
    modules: {
        index
    }
})
store.commit('Index_Info')
export default store
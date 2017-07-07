import * as types from '../mutation-types'
import axios from 'axios'
const state = {
    data: {

    },
    text: 1
}
const getters = {
    changeText: state => {
        return state.text * 100;
    }
}
const actions = {
    getDatas({ commit, state }, payload) {
        axios.post("http://v.juhe.cn/toutiao/index", {
            type: "top",
            key: "89a2a8effd3699b71bc9b4f4f9f1b7cf"
        }).then(function(date) {
            console.log(state)
            console.log(date)
            commit(types.Index_Info, date)
        }).catch(function(error) {
            console.log(error);
        });
    }
}
const mutations = {
    [types.Index_Info](state, res) {
        state.data = res
    }
}
export default {
    state,
    actions,
    mutations
}
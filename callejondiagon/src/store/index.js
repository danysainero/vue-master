import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        total: 0
    },

    mutations: {

        increment(state, price) {
            state.total += price;
        },

        decrement(state, price) {
            state.total -= price;
        },

        resetTotal(state) {
            state.total = 0;
        }
    },

    actions: {

        increment({ commit }, price) {
            commit('increment', price)
        },
        decrement({ commit }, price) {
            commit('decrement', price)
        },
        resetTotal({ commit }) {
            commit('resetTotal')
        }
    }
})


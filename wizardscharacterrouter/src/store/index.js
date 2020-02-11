import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        wizards: [],
        favWizards: [],
        loggingIn: false,
        loginError: null,
        loginSuccessful: false
    },

    mutations: {
        addWizards(state, wizards) {
            state.wizards = wizards;
        },
        addFavWizard(state, wizard) {
            state.favWizards.push(wizard);
        },
        removeFavWizard(state, index) {
            state.favWizards.splice(index, 1);
        },
        loginStart: state => state.loggingIn = true,
        loginStop: (state, errorMessage) => {
            state.loggingIn = false;
            state.loginError = errorMessage;
            state.loginSuccessful = !errorMessage;
        }
    },

    actions: {
        addWizards({
            commit
        }, wizards) {
            commit('addWizards', wizards)
        },

        addFavWizard({
            commit
        }, wizard) {
            Vue.set(wizard, 'fav', true)
            commit('addFavWizard', wizard)
        },

        removeFavWizard({
            commit
        }, index) {
            commit('removeFavWizard', index)
        },

        doLogin({commit}) {
            commit('loginStart');           
        }
    },

    getters: {
        myWizards: state => {
            return state.wizards;
        }
    }
})
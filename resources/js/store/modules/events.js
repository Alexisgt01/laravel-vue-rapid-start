import {generateRandomKey} from "@/utils";
import routes from "@/routes";

const state = {
    key: {
        global: 'foo',
        router: 'bar',
        //
    },

    alert: {
        show: false,
        text: '',
        color: 'error',
    }
};

// getters
const getters = {};

// actions
export const actions = {
    /**
     * Reload the vue instance according to page_target, page_accept
     * @param commit
     * @param view {object} contain: target, accept
     */
    changeKey: ({commit}, view) => {
        let currentRoute = routes.app._route.path;
        if (view.accept.includes(currentRoute) || view.accept === 'all') {
            commit('CHANGE_KEY', view.target)
        }
    },

    showAlert: ({commit}, alert) => {
        commit('SHOW_ALERT', alert);
    }
};

// mutations
const mutations = {
    CHANGE_KEY: (state, target) => {
        state.key[target] = generateRandomKey();
    },

    SHOW_ALERT: (state, alert) => {
        state.alert.show = true;
        state.alert.text = alert.text;
        state.alert.color = alert.color;
        setTimeout(() => {
            state.alert.show = false;
            state.alert.text = null;
        }, 3000)
    }
};

export default {
    namespaced: true,
    strict: false,
    state,
    getters,
    actions,
    mutations
}

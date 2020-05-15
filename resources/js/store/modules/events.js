import {generateRandomKey} from "@/utils";
import routes from "@/routes";

const state = {
    key: {
        global: 'foo',
        router: 'bar',
        //
    },

    alert: [],
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
        state.alert.push({
            show: true,
            text: alert.text,
            color: alert.color,
        });

        setTimeout(() => {
            state.alert.shift();
        }, 5000)
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

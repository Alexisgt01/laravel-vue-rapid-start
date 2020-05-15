import {login, logout} from "@/api/auth";
import instance from "@/api";

const state = {
    user: {},
    auth: false,
};

// getters
const getters = {};

// actions
export const actions = {
    /**
     * Login
     * @param dispatch
     * @param data
     * @returns {Q.Promise<any> | PromiseLike<any>}
     */
    login: ({dispatch}, data) => {
        return login(data.email, data.password).then((r) => {
            dispatch('add', r);
            return r;
        })
    },

    /**
     * Add auth to client side
     * @param commit
     * @param user
     */
    add: ({commit}, user) => {
        if (!localStorage.token) {
            instance.defaults.headers.common['Authorization'] = `Bearer ` + user.access_token;
            localStorage.setItem('token', user.access_token);
        }
        commit('ADD_USER', user)
    },

    /**
     * Logout
     * @param dispatch
     * @returns {Q.Promise<any> | PromiseLike<any>}
     */
    logout: ({dispatch}) => {
        return logout().then((r) => {
            dispatch('remove');
            return r;
        })
    },
    /**
     * Remove auth
     * @param commit
     */
    remove: ({commit}) => {
        instance.defaults.headers.common['Authorization'] = '';
        localStorage.removeItem('token');
        commit('RM_USER')
    },

};

// mutations
const mutations = {
    ADD_USER: (state, user) => {
        state.user = user.me;
        state.auth = true;
    },

    RM_USER: (state) => {
        state.auth = false;
        state.user = {};
    },
};

export default {
    namespaced: true,
    strict: false,
    state,
    getters,
    actions,
    mutations
}

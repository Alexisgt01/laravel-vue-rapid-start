import router from '@/routes'
import {checkRights} from "@/directive/permissions";
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const state = {
    open: [],
};

// getters
const getters = {
    open: state => state.open,
};

// actions
const actions = {
    /**
     * Add the route in a store and redirect it
     * Check auth & permission
     * @param {function} commit - ADD_PAGE
     * @param {object} state - open
     * @param {object} route - 'name', 'route'
     */
    addPage: ({commit, state}, route) => {
        let openned = state.open.find(o => o.route === route.route);
        // If tab route contain new route
        if (!openned) {
            commit('ADD_PAGE', {
                name: route.name,
                route: route.route,
            })
        }

        // If current route != new route
        if (router.currentRoute.path !== route.route) {
            router.push({path: route.route})
        }


    },

    /**
     * check the tab position relative to others and closes accordingly
     * @param {function} commit - CLOSE_PAGE
     * @param {object} getters - open.find(id)
     * @param {string} path - unique path of the route to close
     */
    closePage: ({getters, commit}, path) => {
        let allTab = getters.open;
        let tabToClose = getters.open.find(o => o.route === path);
        let tabToCloseIndex = allTab.indexOf(tabToClose);

        let close = function () {
            if (tabToClose.route === router.currentRoute.path) {
                if (tabToCloseIndex !== 0) {
                    if (allTab.length === tabToCloseIndex + 1) {
                        router.push({path: getters.open[tabToCloseIndex - 1].route})
                    } else {
                        router.push({path: getters.open[tabToCloseIndex + 1].route})
                    }
                } else {
                    if (allTab.length !== 1) {
                        console.log(getters.open[tabToCloseIndex + 1].route);
                        router.push({path: getters.open[tabToCloseIndex + 1].route})
                    } else {
                        router.push({path: '/dashboard'});
                        commit('ADD_PAGE', {
                            name: 'Dashboard',
                            route: '/dashboard',
                        })
                    }
                }
            }
            commit('CLOSE_PAGE', {
                index: tabToCloseIndex,
            })
        };
        close();


    }
};

// mutations
const mutations = {
    ADD_PAGE: (state, route) => {
        state.open.push({
            name: route.name,
            route: route.route,
        })
    },


    CLOSE_PAGE: (state, index) => {
        state.open.splice(index.index, 1);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

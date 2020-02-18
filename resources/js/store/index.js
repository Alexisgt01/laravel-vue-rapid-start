
import Vue from 'vue';
import Vuex from 'vuex';
import routes from "./modules/routes";
import events from "./modules/events";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        routes,
        events,
    }
})

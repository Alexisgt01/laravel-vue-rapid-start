import Vue from 'vue';
import Vuex from 'vuex';
import routes from "./modules/routes";
import events from "./modules/events";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        routes,
        auth,
        events,
    }
})

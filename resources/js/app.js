import './bootstrap'
import Vue from 'vue'
import Index from './views';
import VueRouter from 'vue-router';
import router from './routes/index';
import vuetify from './plugins/vuetify' // path to vuetify export
import store from '@/store';
import storeMixin from '@/store/mixins';

Vue.mixin(storeMixin);
window.Vue = Vue;
Vue.use(VueRouter);
Vue.mixin(require('./trans'))

const app = new Vue({
    router,
    vuetify,
    store,
    render: h => h(Index),
}).$mount('#app');

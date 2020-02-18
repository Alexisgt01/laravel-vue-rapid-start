import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import fr from 'vuetify/es5/locale/fr';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({

    lang: {
        locales: {fr},
        current: 'fr',
    },
    icons: {
        iconfont: 'fa',
    },
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as VueGoogleMaps from 'vue2-google-maps';
import Vuefire from 'vuefire';

// explicit installation required in module environments
Vue.use(Vuefire);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDszqVuo4ggnsKgWJquPWWj2iVA9JxC1x8',
  }
});

/**
 * Vuetify
 */
Vue.use(Vuetify)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

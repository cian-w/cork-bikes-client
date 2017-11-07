// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBVKAk6fbxz_FnVBiWEUEFFor9a6eb2N8A'
  }
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

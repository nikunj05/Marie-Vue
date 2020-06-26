import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import axios from 'axios';
import VueResource from 'vue-resource';
import {routes} from './routes'
import VCalendar from 'v-calendar'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Vuelidate from 'vuelidate'
import store from './store/store';


import vuetify from './plugins/vuetify'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css' // This line here
import 'material-design-icons-iconfont/dist/material-design-icons.css' ;

import { library } from '@fortawesome/fontawesome-svg-core'
import {faSlidersH, faCarBattery, faCalendarAlt, faMapMarkerAlt, faCar, faArrowAltCircleRight, faInfoCircle, faCaretDown} from '@fortawesome/free-solid-svg-icons'
//import { faComment } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'


// Use v-calendar & v-date-picker components
Vue.use(axios);
Vue.use(Buefy);
Vue.use(Vuelidate);
Vue.use( VueRouter);
Vue.use( VCalendar, {
  componentPrefix: 'vc',
  screens: {
    tablet: '576px',
    laptop: '992px',
    desktop: '1200px',
  },  // Use <vc-calendar /> instead of <v-calendar />
});
Vue.use(VueResource);

Vue.config.productionTip = false


library.add(
  faSlidersH, 
  faCarBattery,
  faCalendarAlt,
  faMapMarkerAlt,
  faCar,
  faArrowAltCircleRight,
  faInfoCircle,
  faCaretDown
  
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)


const router = new VueRouter({
  routes,
 mode: 'history',
})

//Vue Material for styling
Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')


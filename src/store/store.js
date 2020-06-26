import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import modelsModule from './modules/modelsapi';


Vue.use(axios)
Vue.use(Vuex)

export default new Vuex.Store({
   modules: {
       modelsApi: modelsModule
   }
})
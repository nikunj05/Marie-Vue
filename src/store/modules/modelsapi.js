import axios from 'axios';
import * as API from './session';

export default {
  //Global State
    state: {
        session: null,
        models: [],
        sites: [],
        totalDays: '',
        SelectForm: {},

      },
      mutations: {
        updateSession: (state, value) => state.session = value,
        updateModels: (state, value) => state.models = value,
        updateSites: (state, value) => state.sites = value,
        updateTotalDays: (state,value) => {
          state.totalDays=value
        },
        updateSelectForm: (state, value) =>{state.SelectForm = value 
          state.SelectForm.totalDays=state.totalDays
          console.log(state.SelectForm.totalDays)
          console.log(value)} 
      },
      actions: {
        //updating totalDays in global state in vuex
        async checkTotalDays({ commit }, totalDays) {
         commit("updateTotalDays", totalDays);
        },
          //refresh expired token , timeout
        checkSession: async ({ commit, state }) => {
          if (!state.session || !state.session.timeout || new Date() > new Date(state.session.timeout)) {
            const session = await API.getSession();
            commit('updateSession', session);
          }
        },

        //pass token to headers and call /booking/models
        startSession: async ({ dispatch, commit, state }) => {
          try {
            await dispatch('checkSession');
            console.log(state.session);

            // api call here
            axios.get( `/booking/models`, { headers: 
                {
                'X-API-Token': state.session.token, 
                }
            })
             .then(res => {
                 const models = res.data.models
                 const sites =res.data.sites
                 console.log(res.data.sites)
                 commit('updateModels', models)
                 commit('updateSites', sites )
               console.log(res)
               console.log(models)
             })
             .catch((err) => {
              console.log('error ' + err);
            });
          } catch (e) {
            console.log('ooops');
          }
        },
       
        //updating SelectForm in vuex store state
        async sendSelectForm({ commit }, SelectForm) {
          commit("updateSelectForm", SelectForm);
         },
      },
      getters: {
        getSession: state => state.session,
        getModels: state => state.models,
        getSites: state => state.sites,
        getTotalDays: state => state.totalDays
      },
      modules: {
      }
}
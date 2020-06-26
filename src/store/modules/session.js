import Vue from 'vue';
import axios from 'axios';

Vue.use(axios)

//get token und timeout für /models
export const getSession = async () => {
    const response = await axios.post(`/session/start`);
    const data = response.data;
    return data;
  }

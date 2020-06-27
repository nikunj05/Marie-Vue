<template>
  <v-app>
    <v-container fluid center >
      <div class="background">
        <router-view> </router-view>
      <!-- <v-row justify="center" align="center">
      <v-col cols="12" md="8">
        
      </v-col>
      </v-row> -->
     
      </div>
      
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';
export default {
 
  name: 'App',

  components: {
  
  },

  data: () => {
    return {
    }
  },
  computed: {
    ...mapGetters(['getSession']),
  },

  //to call models on page load mounted or created
  created() {
    this.startSession();
  },
  methods: {
   
    ...mapActions(['startSession']),
  
  }
};
</script>

<style src="./style.scss" lang="scss"></style> 


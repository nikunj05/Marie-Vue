<template>
     <v-col cols="10" md="10"  >
          <v-card class="mx-auto" max-width="100%">
            <v-card-text style="height: 100% ">
              <div>
                <span style="float:left">Gesamtpreis:</span>
              </div>
              <div>
                <span style="float:right">894,50 €</span>
              </div>
              </v-card-text>
              <v-card-text style="height: 100% ">
                <span  v-if="tDays"  style="float:left">Für {{getTotalDays}} Tage inkl. MwSt.</span>
              
                <span style="float:right" >42,60 € pro Tag</span>
               <br/>
            </v-card-text>
          </v-card>
  </v-col>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
    data()   {
    return {
        tDays: true,
    }
    },
    methods: {
    },
     computed: {
         ...mapGetters(['getTotalDays']),


     },
      watch: {
        //get global totalDays and watch for changes
        getTotalDays: function(totalDays) {
            console.log(totalDays)
          if (totalDays > 0) {
              this.tDays =true;
          }else {
            this.tDays=false
        }
        }
      },
}
</script>
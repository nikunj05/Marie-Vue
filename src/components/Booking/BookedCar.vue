<template>
        <v-card class="mx-auto" max-width="100%">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <div>
              <span style="float:left" class=" subtitle-2 font-weight-medium">Bisherige Auswahl</span>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div>
              <span style="float:right"  class=" subtitle-2 font-weight-medium">894,50 €</span>
            </div>
          </v-col>

        <v-col cols="12">
            <div>
          <span style="float:left">
            21 Tage, Volskwagen e-Golf, 38kWh, Highline
            28.01.2020 bis 17.02.2020, 600km frei
            Abholung und Rückgabe: Arnstadt
          </span>
        </div>
        </v-col>


        <v-col cols="12" md="6">         
     <v-btn 
            
            large block 
            @click="navigateToForm"
              color="teal darken-1"
              dark >
             Züruck
            </v-btn>
      </v-col>
</v-row>
        

      </v-card-text>
    </v-card>
</template>

<script>
export default {
   methods: {
     //navigate to next page
    navigateToForm () {
      console.log('lknvsfkjfjk')
      this.$router.push({ path: "/booking-form" });
    },
   }
}

</script>

<template>
<div class="inner-container-center car-details">
  <img class="top-bg" :src="require('@/assets/background.png')" />
  <div class="cardetails-main">
      <!-- 1 row -->

      <v-row >
        <v-col cols="1"></v-col>
        <v-col>
          <v-card >
            <v-card-title class="font-weight-medium subtitle-2">Ihre Auswahl ist verfügbar</v-card-title>

            <v-card-subtitle>Bitte wählen Sie ihre gewünschten Zusatzoptionen</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <!-- 2 row -->
      <v-row >
        <v-col cols="1" align="right" justify="right">
          <v-tooltip left color="grey lighten-5">
            <template v-slot:activator="{ on }">
              <font-awesome-icon icon="info-circle" class="tooltip-d" size="2x" v-on="on" />
            </template>
            <span class="black--text" style="width: 16rem; display: block">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </span>
          </v-tooltip>
        </v-col>

        <v-col cols="11">
          <v-card>
            <v-card-title class="font-weight-medium subtitle-2">Bisherige Auswahl</v-card-title>

            <v-card-subtitle>
              21 Tage, Volkswagen, e-Golf, 38kWh, Highline
              <br />28.01.2020 bis 17.02.2020, 600km frei
              <br />Abholung und Rückgabe: Arnstadt
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <!-- 3 row -->

      <v-row>
        <v-col cols="1" align="right" justify="right">
          <v-tooltip left color="grey lighten-5">
            <template v-slot:activator="{ on }">
              <font-awesome-icon icon="info-circle" class="tooltip-d" size="2x" v-on="on" />
            </template>
            <span class="black--text" style="width: 16rem; display: block">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </span>
          </v-tooltip>
        </v-col>

        <v-col cols="11" align="right" justify="right">
          <v-select
            :items="items"
            :menu-props="{ bottom: true, offsetY: true }"
            label="Kilmoterpaket"
            solo
          />
        </v-col>
      </v-row>

      <!-- 4 row -->
      <v-row >
        <v-col cols="1"></v-col>

        <v-col cols="11">
          <v-select
            :driver="driver"
            :menu-props="{ bottom: true, offsetY: true }"
            label="Zusätzliche Fahrer"
            solo
          />
        </v-col>
      </v-row>

      <!-- 5 row -->
      <v-row  >
        <v-col cols="1" align="right" justify="right">
          <v-tooltip left color="grey lighten-5">
            <template v-slot:activator="{ on }">
              <font-awesome-icon icon="info-circle" class="tooltip-d" size="2x" v-on="on" />
            </template>
            <span class="black--text" style="width: 16rem; display: block">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </span>
          </v-tooltip>
        </v-col>

        <v-col >
          <v-card class="mx-auto" max-width="100%">
            <v-card-actions>
              <v-checkbox v-model="checkbox" right>
                <template v-slot:label>
                  <div>Reduzierung Selbstbeteiligung auf 500,- €</div>
                </template>
              </v-checkbox>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- 6 row -->

      <v-row  >
        <v-col cols="1" align="right" justify="right">
           <v-tooltip left color="grey lighten-5">
            <template v-slot:activator="{ on }">
              <font-awesome-icon icon="info-circle" class="tooltip-d" size="2x" v-on="on" />
            </template>
            <span class="black--text" style="width: 16rem; display: block">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </span>
          </v-tooltip>
        </v-col>
        <v-col >
          <v-select
            :items="items"
            :menu-props="{ bottom: true, offsetY: true }"
            label="Abholzeit"
            solo
          />
        </v-col>
        <v-col >
          <v-select
            :items="items"
            :menu-props="{ bottom: true, offsetY: true }"
            label="Rückgabezeit"
            solo
          />
        </v-col>
      </v-row>

   <!-- 7 row -->
     <v-row  >
        <v-col cols="1" align="right" justify="right">
           <v-tooltip left color="grey lighten-5">
            <template v-slot:activator="{ on }">
              <font-awesome-icon icon="info-circle" class="tooltip-d" size="2x" v-on="on" />
            </template>
            <span class="black--text" style="width: 16rem; display: block">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </span>
          </v-tooltip>
        </v-col>

      <v-col style="z-index: 5" >
        <v-textarea style="z-index: 5"  solo name="input-7-4" label="Anmerkungen"></v-textarea>
      </v-col>
     </v-row>

      <!-- 8 row -->

      <v-row  >
         <v-col cols="1"></v-col>

         <v-col cols="11">
        <v-card class="mx-auto fullwidth" max-width="100%" style="z-index: 5">
          <v-card-text>
            <div>
              <span style="float:left">Gesamtpreis:</span>
            </div>
            <div>
              <span style="float:right">894,50 €</span>
            </div>
            <br />

            <div>
              <span style="float:left">Für 21 Tage inkl. MwSt.</span>
            </div>
            <div>
              <span style="float:right">42,60 € pro Tag</span>
            </div>

            <p class="display-1 text--primary"></p>
          </v-card-text>
        </v-card>
         </v-col>
      </v-row>

      <!-- Navigation Buttons -->

      <v-row  justify="end">
        <v-col offset-md="1" >
          <v-btn @click="navigateToCarOffers"
          color="white" block 
          class="sameheight"
          large
          exact
          style="z-index: 5"
          >Züruck
          </v-btn>
        </v-col>
        
        <v-col  >
          <v-btn @click="navigateToBooking" 
          color="teal darken-1"
          class="sameheight" 
          block large
          exact
          dark
          style="z-index: 5"
          >
           Weiter
          </v-btn>
        </v-col>
      </v-row>
  </div>
  <img class="bottom-bg" :src="require('@/assets/bg.png')" />
</div>
  
</template>

<script>
export default {
  name: "CarDetails",
  data: () => ({
    items: ["02:00", "07:00", "09:00", "22:00"],
    driver: ["yes", "no"],
    checkbox: false,
    radios: "Duckduckgo",
    switchMe: false
  }),

  methods: {
    navigateToCarOffers() {
      this.$router.push({ path: "/offered-cars" }); 
    },

    navigateToBooking() {
      this.$router.push({ path: "/booking-form" });
    }
  }
};
</script>

<style scoped>

.navButtons a:hover {
    color: none
}
</style>
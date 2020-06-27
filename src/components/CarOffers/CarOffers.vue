<template>
  <div class="app">
    <div class="inner-container">
      <v-row>
      <v-col cols="1" class="pb-5"></v-col>
      <v-col cols="11" class="pl-6 pb-5">
        <v-card>
          <v-card-title class="font-weight-medium subtitle-2">Leider ihre Auswahl nicht verfügbar</v-card-title>
          <v-card-subtitle>Dennoch möchten wir Ihnen ähnliche Alternativoptionen anbieten:</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <!-- Auto und ausgewählte Zeit sind am meisten ähnlich Wunsche der Kunde -->
    <v-row>
      <v-col cols="1" class="pt-5 pb-5">
        <v-tooltip left color="grey lighten-5">
          <template v-slot:activator="{ on }">
            <font-awesome-icon :icon="icons.calendar" class="tooltip-o" size="2x" v-on="on" />
          </template>
          <span
            class="black--text"
            style="width: 16rem; display: block"
          >{{AutoTimeMatch.tooltipText}}</span>
        </v-tooltip>

        <v-tooltip left color="grey lighten-5">
          <template v-slot:activator="{ on }">
            <font-awesome-icon
              :icon="icons.lineType"
              class="tooltip-o"
              style=" paddingRight: 5px;"
              size="2x"
              v-on="on"
            />
          </template>
          <span
            class="black--text"
            style="width: 16rem; display: block"
          >{{AutoTimeMatch.tooltipText}}</span>
        </v-tooltip>
      </v-col>

      <v-col cols="11" class="pl-6 pt-5 pb-5">
        <router-link
          tag="div"
          class="v-card"
          :to="'/offered-cars/'+AutoTimeMatch.id"
          style="cursor: pointer"
        >
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="9" class="pt-0 pb-0">
                  <div class="body-2">
                    <p class="font-weight-medium subtitle-1">{{AutoTimeMatch.title}}</p>

                    <p class="mb-2">
                      Übergabe und Rückgabe:
                      <strong>{{AutoTimeMatch.location}}</strong>
                    </p>
                    <p class="mb-2">
                      Von
                      <strong>{{AutoTimeMatch.startDate}}</strong> bis
                      <strong>{{AutoTimeMatch.endDate}}, {{AutoTimeMatch.availableKm}}</strong>
                    </p>
                    <p class="mb-0">
                      <strong>{{AutoTimeMatch.price}}€ für</strong>
                      <strong>{{AutoTimeMatch.dateRange}} days, {{AutoTimeMatch.availableKm}}km frei</strong> inkl. MwSt.
                    </p>
                  </div>
                </v-col>

                <v-col cols="3" class="pt-0 pb-0" style="position: relative;">
                  <v-avatar
                    class="ma-0 carright"
                    height="auto"
                    width="250"
                    tile
                  >
                    <v-img :src="AutoTimeMatch.src" contain></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>

    <!--- Die gewünschte Lokation der Kunde   --->

    <v-row>
      <v-col cols="1" class="pt-5 pb-5">
        <v-tooltip left color="grey lighten-5">
          <template v-slot:activator="{ on }">
            <font-awesome-icon :icon="icons.location" class="tooltip-o" size="2x" v-on="on" />
          </template>
          <span
            class="black--text"
            style="width: 16rem; display: block"
          >{{nearLocation.tooltipText}}</span>
        </v-tooltip>
      </v-col>

      <v-col cols="11" class="pl-6 pt-5 pb-5">
        <router-link
          tag="div"
          class="v-card"
          :to="'/offered-cars/'+nearLocation.id"
          style="cursor: pointer"
        >
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="9" class="pt-0 pb-0">
                  <div class="body-2">
                    <p class="font-weight-medium subtitle-1">{{nearLocation.title}}</p>

                    <p class="mb-2">
                      Übergabe und Rückgabe:
                      <strong>{{nearLocation.location}}</strong>
                    </p>
                    <p class="mb-2">
                      Von
                      <strong>{{nearLocation.startDate}}</strong> bis
                      <strong>{{nearLocation.endDate}}, {{nearLocation.availableKm}}</strong>
                    </p>
                    <p class="mb-0">
                      <strong>{{nearLocation.price}}€ für</strong>
                      <strong>{{nearLocation.dateRange}} days, {{nearLocation.availableKm}}km frei</strong> inkl. MwSt.
                    </p>
                  </div>
                </v-col>
                <v-col cols="3" class="pt-0 pb-0" style="position: relative;">
                  <v-avatar
                    class="ma-0 carright"
                    height="auto"
                    width="250"
                    tile
                  >
                    <v-img :src="nearLocation.src" contain></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>

    <!-- Auto ist ähnlich Wunschde der Kunde-->
    <v-row>
      <v-col cols="1" class="pt-5 pb-5">
        <v-tooltip left color="grey lighten-5">
          <template v-slot:activator="{ on }">
            <font-awesome-icon :icon="icons.car" class="tooltip-o" size="2x" v-on="on" />
          </template>
          <span class="black--text" style="width: 16rem; display: block">{{similarCar.tooltipText}}</span>
        </v-tooltip>
      </v-col>

      <v-col cols="11" class="pl-6 pt-5 pb-5">
        <router-link
          tag="div"
          class="v-card"
          :to="'/offered-cars/'+similarCar.id"
          style="cursor: pointer"
        >
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="9" class="pt-0 pb-0">
                  <div class="body-2">
                    <p class="font-weight-medium subtitle-1">{{similarCar.title}}</p>

                    <p class="mb-2">
                      Übergabe und Rückgabe:
                      <strong>{{similarCar.location}}</strong>
                    </p>
                    <p class="mb-2">
                      Von
                      <strong>{{similarCar.startDate}}</strong> bis
                      <strong>{{similarCar.endDate}}, {{similarCar.availableKm}}</strong>
                    </p>
                    <p class="mb-2">
                      <strong>{{similarCar.price}}€ für</strong>
                      <strong>{{similarCar.dateRange}} days, {{similarCar.availableKm}}km frei</strong> inkl. MwSt.
                    </p>
                  </div>
                </v-col>

                <v-col cols="3" class="pt-0 pb-0" style="position: relative;">
                  <v-avatar
                    class="ma-0 carright"
                    height="auto"
                    width="250"
                    tile 
                  >
                    <v-img :src="similarCar.src" contain></v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" offset="1" class="pl-6">
        <v-btn class="sameheight" large block color="white" @click="navigateToHome">Züruck</v-btn>
      </v-col>
      <!-- <v-col cols="11" class="pl-6" md="5">
          <v-btn large block color="teal darken-1" dark @click="navigateToDetails">Weiter</v-btn>
      </v-col>-->
    </v-row>
    </div>
    
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    icons: {
      calendar: "calendar-alt",
      lineType: "sliders-h",
      location: "map-marker-alt",
      car: "car"
    },

    similarCar: {
      id: "0",
      color: "white",
      startDate: "12.04.2020",
      endDate: "10.06.2020",
      dateRange: "21",
      price: "678",
      availableKm: "600",
      src: require("@/assets/mercedes.png"),
      title: "Volskwagen e-Golf, 38kWh, Highline",
      location: "Leipzig",
      tooltipText:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
    },
    nearLocation: {
      id: "1",
      color: "white",
      startDate: "12.04.2020",
      endDate: "10.06.2020",
      dateRange: "21",
      price: "678",
      availableKm: "600",
      src: require("@/assets/mercedes.png"),
      title: "Volskwagen e-Golf, 38kWh, Highline",
      location: "Leipzig",
      tooltipText:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
    },

    AutoTimeMatch: {
      id: "2",
      color: "white",
      startDate: "12.04.2020",
      endDate: "10.06.2020",
      dateRange: "21",
      price: "678",
      availableKm: "600",
      src: require("@/assets/mercedes.png"),
      title: "Volkswagen e-UP, 38kWh",
      location: "Arnstadt",
      tooltipText:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
    }
  }),

  methods: {
    navigateToHome() {
      this.$router.push({ path: "/select-car" });
    },

    navigateToDetails() {
      this.$router.push({ name: "details" });
    }
  }
};
</script>

<style src="./CarOffers.scss" lang="scss" >
</style>




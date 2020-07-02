<template>
  <div class="inner-container-center">
    <!-- 1 row -->
    <v-col offset-md="1" cols="11" class="pr-0 pb-0">
      <v-card class="mx-auto">
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6" class="pt-0 pb-0">
              <div>
                <span style="float:left" class="subtitle-2 font-weight-medium">Bisherige Auswahl</span>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="pt-0 pb-0">
              <div>
                <span style="float:right" class="subtitle-2 font-weight-medium">894,50 €</span>
              </div>
            </v-col>

            <v-col cols="7" class="pt-0 pb-0">
              <div>
                <span style="float:left">
                  21 Tage, Volskwagen e-Golf, 38kWh, Highline
                  28.01.2020 bis 17.02.2020, 600km frei
                  Abholung und Rückgabe: Arnstadt
                </span>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col offset-md="1" cols="11" class="pr-0 pb-0 mt-10">
      <v-card class="mx-auto">
        <v-card-text class="thank-you-page-detail">
          <p class="pb-3 pt-3">Vielen Dank für Ihre Interesse.</p>
          <p class="pb-3">Ihre Anfrage wurde erfolgreich entgegengenommen.</p>
          <p class="pb-3">Ein/e Mitarbeiter/in wird die übermittelten Angaben schnellstmöglich Prüfen und sich dann bei Ihnen Melden.</p>
          <p class="pb-3">In der Regel können Sie im Laufe des nächsten Werktags eine Antwort von uns erwarten.</p>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col offset-md="1" cols="11" class="pt-12 pb-0">
      <v-row justify="end">
        <v-col class="pr-0">
          <v-btn @click="navigateToBookedCar" color="white" block class="sameheight" large exact>Zurück zur Auswahl</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  methods: {
    //navigate to next page
    navigateToBookedCar() {
      this.$router.push({ path: "/booked-car" });
    }
  }
};
</script>

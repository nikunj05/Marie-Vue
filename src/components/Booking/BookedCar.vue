<template>
  <div class="inner-container-center booked-car">
    <img class="top-bg" :src="require('@/assets/background.png')" />
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
        <v-card-text>
          <v-row>
            <v-col cols="12" class="pt-0 booking-car-detail-card-title">
              <b>
                Mit dem Absenden dieses Formulars willigen Sie in die
                <a
                  href="#"
                >Allgemeinen Geschäftsbedingungen</a> ein und bestätigen die Kenntnisnahme der Datenschutzerklärung.
              </b>
            </v-col>
            <v-col
              cols="12"
              class="booking-car-detail-card-detail"
            >Ihre Daten werden nicht weitergegeben.</v-col>
            <v-col cols="12" class="booking-car-detail-card-detail">
              In unregelmäßigen Abständen informieren wir unsere Kunden per E-Mail über neue Angebote. Dem Versand derartiger E-Mails können Sie jederzeit per E-Mail an
              <a
                href="#"
              >datenschutz@nextmove.de</a> oder per Brief an unsere im Impressum angegebene Adresse widersprechen.
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col offset-md="1" cols="11" class="pt-12 pb-0">
      <v-row justify="end">
        <v-col>
          <v-btn @click="navigateToForm" color="white" block class="sameheight" large exact>Züruck</v-btn>
        </v-col>

        <v-col class="pr-0">
          <v-btn
            @click="navigateToThankYou"
            color="teal darken-1"
            class="sameheight"
            block
            large
            exact
            dark
          >Absenden</v-btn>
        </v-col>
      </v-row>
    </v-col>
    <img class="bottom-bg" :src="require('@/assets/bg.png')" />
  </div>
</template>

<script>
export default {
  methods: {
    //navigate to next page
    navigateToForm() {
      this.$router.push({ path: "/booking-form" });
    },
    navigateToThankYou() {
      this.$router.push({ path: "/thank-you" });
    }
  }
};
</script>

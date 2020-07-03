<template>
  <!-- First row -->
  <v-row class="rentSection">
    <v-col cols="1" style="color: black"></v-col>
    <v-col cols="11">
      <v-card class="d-flex mx-auto">
        <v-col cols="10" md="10">
          <v-card-title class="pa-0 font-weight-medium subtitle-2">Den e-Golf jetzt noch günstiger Mieten</v-card-title>
          <v-card-subtitle>Im nextmove-Abo ab 599, -€ pro Monat ink. MwSt.</v-card-subtitle>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1" class="arrowButton" >
          <v-btn icon class="arrowIcon">
            <font-awesome-icon
              icon="arrow-alt-circle-right"
              :style="{ color: 'gray',  verticalAlign: 'middle' }"
              size="2x"
            />
          </v-btn>
        </v-col>
      </v-card>
    </v-col>
  </v-row>
</template>
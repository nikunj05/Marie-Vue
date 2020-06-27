<template>
<div class="inner-container">
  <div class="bookingForm">

    <!-- 1 row -->
    <v-row>
    <v-card class="mx-auto">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <div>
              <span style="float:left" class="subtitle-2 font-weight-medium">Bisherige Auswahl</span>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div>
              <span style="float:right" class="subtitle-2 font-weight-medium">894,50 €</span>
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
        </v-row>
      </v-card-text>
    </v-card>
    </v-row>
    <br>
    <br>
    <CustomerType :companyName.sync="parentData"> </CustomerType>
    

    <!-- Form field -->
  <v-row justify="center" style="width: 100%">
    <v-form  style="width: 100%"
     ref="form"
      v-model="valid"
      :lazy-validation="lazy">
    <v-row >
        <v-col cols="12" md="6">
          <v-text-field 
             solo label="Vorname"
             name="firstname"
             v-model="bookingForm.firstname"
              :rules="formRules"
             required
             ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
             solo label="Nachname"
             :rules="formRules"
             name="lastname"
             v-model="bookingForm.lastname"
             required
             ></v-text-field>
        </v-col>
    </v-row>

    <v-row >
        <v-col cols="12" md="6">
          <v-text-field 
             solo label="E-Mail"
             name="email"
             v-model="bookingForm.email"
              :rules="emailRules"
             required
             ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
             solo label="Telefon"
             :rules="formRules"
             name="telefon"
             v-model="bookingForm.phone"
             required
             ></v-text-field>
        </v-col>
    </v-row>

    <v-row>

        <v-col cols="12" md="6">
          <v-text-field 
             solo label="Straße"
            :rules="formRules"
            name="street"
            v-model="bookingForm.street"
             required
            ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field 
            solo label="Hausnummer"
            :rules="formRules"
            v-on:keypress="isNumber($event)"
            name="homeNumber"
            v-model="bookingForm.homeNumber"
             required
            ></v-text-field>
        </v-col>

    </v-row>

    <v-row>

        <v-col cols="12" md="6">
          <v-text-field 
             :rules="formRules"
             name="postcode"
             v-on:keypress="isNumber($event)"
             v-model="bookingForm.postcode"
             required
             solo label="Postleitzahl"></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field 
            solo label="Ort"
            :rules="formRules"
            name="city"
            v-model="bookingForm.city"
            required></v-text-field>
        </v-col>
    </v-row>

       <v-row>
            <v-col cols="12">
                <Countries :country.sync="countryData"/>
           </v-col>
       </v-row>
        
  </v-form>
        
  </v-row>
        
        


       <v-row justify="center" style="width: 100%" >
         <v-row>
        <v-col cols="12" md="6" >
            <v-btn 
            
            large block 
            @click="navigateOffers"
              color="teal darken-1"
              dark >
             Züruck
            </v-btn>
        </v-col>

        <v-col cols="12" md="6">
         
          <v-btn 
             large
             block
             color="teal darken-1" 
             exact
             dark 
             :disabled="!valid"
             @click="validate" >
             Weiter  
          </v-btn>
        </v-col>
        </v-row>
       </v-row>
  </div>
</div>
  
</template>

<script>
import CustomerType from './CustomerType';
import Countries from './Countries';

export default {
  components: {
    CustomerType,
    Countries
  },
  data: () => ({
    parentData: '',
    countryData: '',
    bookingForm: {
      firstname: '',
      lastname: '',
      email:'',
      phone: '',
      companyName: '',
      street: '',
      homeNumber: '',
      postcode: '',
      city:'',
      country: ''

    },
    valid: true,
    form: false,
    isLoading: false,
    
    formRules: [
      v => !!v || 'Dieses Feld ist erforderlich',
      v => (v && v.length <= 10) || 'Dieses Feld muss weinger als 100 Zeichen haben!',
    ],
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail ist nicht gültig',
    ],
    lazy: false,
  }),
  
  methods: {
    navigateOffers () {
      this.$router.push({name: 'details'});
    },

     validate () {
        console.log(this.bookingForm)
        this.$http.post('/booking', this.bookingForm)
        .then(response => {
          console.log(response)

        }, error => {
           console.log(error)
        }

        )
        this.$router.push({path: 'booked-car'});
        if (this.$refs.form.validate()) {
          this.snackbar = true
         
        }
     },
    submitForm: (e) =>{

      this.errors = [];
       e.preventDefault();
      }

    },
    watch: {
       parentData: function(val){
         console.log("This value is from Booking Form WATCH"+ val)
         this.bookingForm.companyName=val;
       },
       countryData: function(val){
         console.log("This value is from Booking Form WATCH"+ val)
         this.bookingForm.country=val;
       },
    }
  
};
      
</script>

<style scoped>


</style>
<template>
  <div class="app">
     <div class="inner-container-center">
       <v-form  
          ref="form"
          v-model="valid"
          :lazy-validation="lazy"
          >
          
          <!-- Import and display RentSelected Component. First row in SelectCar page  -->
          <RentSelected/>

            <!-- Second row -->
            <v-row>
              <v-col cols="1" align="right" justify="center" >
                  <v-tooltip left color="grey lighten-5"  >
                      <template v-slot:activator="{ on }" >
                        <font-awesome-icon class="tooltip" icon="car"  size="2x" v-on="on"/>
                      </template>
                      <span class="black--text ttcontent" style="width: 16rem; display: block">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</span>
                  </v-tooltip>
              </v-col>

            <!-- Display Name of models. getModels comes from vuex store/api -->
              <v-col cols="11" 
              class="dropdown">
              <select  @input="handleSelect($event)"
                @change="loopModels()"
                v-model="SelectCarForm.ModelName" required >
                <option  value="" selected disabled hidden > Einen Model auswählen </option>
                <option v-for="item in getModels"
                :key="item.ModelId" :value="item.Name">
                {{ item.Name }}
                </option>
              </select>

              </v-col>
            </v-row>

          <!-- Import and Display Calendar Component-->  
          <BookingCalendar  @buttonDisabled="buttonDisabled = $event" 
          @startDate="startDate = $event"
          @endDate="endDate = $event" 
          :range.sync="calendarRange"/>
              
            <!-- Fourth row -->
          <v-row>
            <v-col cols="1"  align="right" justify="center" >
                  <v-tooltip left color="grey lighten-5"  >
                      <template v-slot:activator="{ on }" >
                        <font-awesome-icon icon="map-marker-alt" class="tooltip" size="2x" v-on="on"/>
                      </template>
                      <span class="black--text" style="width: 16rem; display: block">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</span>
                  </v-tooltip>

            <!--Display locations --> 
            </v-col>
            <v-col cols="11" class="dropdown" >
                <select  @input="handleSelect($event)" v-model="SelectCarForm.SiteName" required >
                <option  value="" selected disabled hidden > Stadt auswählen </option>
                <option v-for="item in getSites"
                :key="item.SiteId" :value="item.Name">
                {{ item.Name }}
                </option>
              </select> 
          </v-col> 
              
          </v-row> 

          <!--  row Number 5-->
          <v-row  v-if="!modelVariant">
              <v-col cols="1" align="right" justify="center" md="2">
                <v-tooltip left color="grey lighten-5"  >
                      <template  v-slot:activator="{ on }" >
                        <font-awesome-icon icon="car-battery" class="tooltip-h" size="2x" v-on="on"/>
                      </template>
                      <span class="black--text" style="width: 16rem; display: block">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</span>
                  </v-tooltip>
              </v-col>
              <!--Display ModelVariants --> 
              <v-col cols="11" md="11" >
                      <input 
                      v-for="each in ModelVariants" 
                      :key="each.ModelVariantId" 
                      readonly
                      required
                      class="toggleButton"
                      :class="{ activeVariant: activeindex1 == each.ModelVariantId }"
                      v-on:click="setActive(each.ModelVariantId, 'Variants'); getModelVariants(each.Name)" 
                      :placeholder="each.Name"
                    >
              </v-col>
          </v-row>

      <!--  row Number 6-->
      <v-row   v-if="!equipmentLine">
            <v-col cols="12" md="2" align="right" justify="center">
                <v-tooltip  left color="grey lighten-5"  >
                      <template v-slot:activator="{ on }" >
                        <font-awesome-icon icon="sliders-h" class="tooltip-h" size="2x" v-on="on"/>
                      </template>
                      <span class="black--text" style="width: 16rem; display: block">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</span>
                  </v-tooltip>
            </v-col>
          <!-- Button verursacht neuladen der Seite, nur input oder div-->
            <v-col cols="10" md="10" >
                  <input
                    v-for="each in EquipmentLines" 
                    :key="each.EquipmentLineId"
                    readonly
                    required 
                    :placeholder="each.Name"
                    :class="{ activeVariant: activeindex2 == each.EquipmentLineId }"
                    class="toggleButton"
                    v-on:click="setActive(each.EquipmentLineId, 'EqLines'); getEquipmentLines(each.Name)"
                  >
              </v-col>  
      </v-row>

      <!--  row Number 7-->
      <v-row >
        <v-col cols="1" md="1"></v-col>
        <TotalSum/>   
      </v-row>

      <v-row >
  <v-col offset-md="1" >
     <v-btn @click="navigateToHome"
          color="white" block 
          class="sameheight"
          large
          exact
          >Züruck
          </v-btn>
  </v-col>
  <v-col>
    <v-btn
       block 
       large
      :loading="loading"
      class="white--text sameheight"
      color="teal darken-1"
      @click="loader = 'loading'; validate(); navigateToCars() "
      :disabled="loading"
       v-if="!buttonDisabled"
    >
      Verfügbarkeit Prüfen
      <template v-slot:loader>
        <span class="custom-loader">
          <v-icon light>cached</v-icon>
        </span>
      </template>
    </v-btn>

     <v-btn
       block 
       large
        :disabled="!valid"
        @click="validate();" 
        v-if="buttonDisabled"
      class="white--text"
    >
      Verfügbarkeit Prüfen
    </v-btn>
  </v-col>
      
</v-row>

      </v-form>
     </div>
    


  <!-- Import and display TotalSum Component (Gesamtpreis) --> 


         
</div>   
</template>



<script>
import required from 'vuelidate/lib/validators'
import { mapGetters,  mapActions } from 'vuex';
import BookingCalendar from './BookingCalendar';
import RentSelected from './RentSelected';
import TotalSum from './TotalSum'

export default {
  components: {
    BookingCalendar,
    RentSelected,
    TotalSum
  },
    data()   {
    return {
      calendarRange: '',
      activeindex1: null,
      activeindex2: null,
      selectedModel: '',
      EquipmentLines: [],
      ModelVariants: [],
      modelItem: {},
      
      locations: [],
      buttonDisabled: false,
      startDate: Number,
      endDate: Number,
      
      modelVariant:true,
      equipmentLine: true,
      valid: true,
      form: false,
      lazy: false,
      SelectCarForm: { 
        ModelName: '',
        SiteName: '',
        EquipmentLine: '',
        ModelVariant:'',
        startDate: '',
        endDate: '',
        totalDays: ''     
      },
       validations: {
         input: {
           required
         },
         select: { required },
       },

      loader: null,
      loading: false,
        
    };
    },
    //Data we get from vuex store first here
     computed: {
    ...mapGetters(['getSession', 'getModels', 'getSites'] ),
   
  },

    methods : {
      //sending Form to Vuex Store
       ...mapActions(['sendSelectForm']),

    
      //loop and display models from vuex store
      loopModels(){
        this.getModels.map(item => {
         if(item.Name ===this.selectedModel){
           this.modelItem=item
           this.EquipmentLines=this.modelItem.EquipmentLines
           this.ModelVariants=this.modelItem.ModelVariants
           //console.log(this.ModelVariants)
          }
        })
      },

      checkvalid (){
        
      },
     
     //set active class for clicked button
      setActive(index, groupName) {
        if(groupName === 'Variants'){
          this.activeindex1 = index
          } 
        if (groupName === 'EqLines'){
            this.activeindex2 = index
        }
      },
      //navigate to next page with vue-router
      navigateToCars(){
         setTimeout(() => (this.$router.push({path: 'offered-cars'})), 3000)
      },
      handleSelect (e ){
        this.selectedModel=e.target.value;
      //console.log(this.selectedModel)
      },

      //if no Model Variant exist, hide whole div including icons
      noModelVariants(){
       this.noModelVariant = false
      },
      
      //if Customer wants book 3 month later for less than 2 weeks, next button is disabled
      isButtonDisabled(val){
        console.log("LATE BOOK WARNING", val)
        if (val ){
          this.buttonDisabled=== true
        } else {
          this.buttonDisabled=== false;
        }  
      },

       validate () {
         console.log(this.SelectCarForm)
         console.log(this.calendarRange)
         this.sendSelectForm(this.SelectCarForm);
        this.$refs.form.validate()
      },
    //get selected value from input buttons and set it to SelectForm
     getModelVariants: function(e) {
     console.log("Model Variant is" + e)
     this.SelectCarForm.ModelVariant = e;
    },
    //get selected value from input buttons and set it to SelectForm
     getEquipmentLines: function(e) {
     console.log("Equipment Line is" + e)
     this.SelectCarForm.EquipmentLine = e;
    },
    setEndDate(){
      this.SelectCarForm.endDate = this.endDate
      console.log(this.endDate)
    },
    setStartDate() {
       this.SelectCarForm.startDate = this.startDate
      console.log(this.startDate)
    }
    
  },
  //Watch is for detecting any change and updating them immediately
  watch: {
    //loading effect for 2 sec for Verfügbarkeit Prüfen button
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false ), 2000)
        this.loader = null
      },
      buttonDisabled: function(buttonDisabled) {
        console.log("BUTTON DISABLED FUNVTION", buttonDisabled)
        this.isButtonDisabled() 
      },
      ModelVariants: function(){
          //console.log(this.ModelVariants)
          if (this.ModelVariants.length >0) {
            this.modelVariant = false
          } else {
            this.modelVariant= true 
          }
      },
       EquipmentLines: function(){
          //console.log(this.ModelVariants)
          if (this.EquipmentLines.length >0) {
            this.equipmentLine = false
          } else {
            this.equipmentLine= true 
          }
      },
      calendarRange: function(val){
         console.log( val)
         //this.bookingForm.country=val;
       },

      endDate: function(){
        this.setEndDate()
      },
       startDate: function(){
        this.setStartDate()
      }
   },
  
};
</script>

<style src="./SelectCar.scss" lang="scss"></style> 
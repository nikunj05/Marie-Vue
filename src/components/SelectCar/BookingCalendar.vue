<template>
  <div class="inner-container">
    <v-row>
          <v-col cols="1" align="center" justify="center" >
             <v-tooltip  left color="grey lighten-5"  >
                <template v-slot:activator="{ on }" >
                    <font-awesome-icon icon="calendar-alt" class="tooltip" size="2x" v-on="on"/>
                </template>
                <span class="black--text" style="width: 16rem; display: block">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</span>
             </v-tooltip>
          </v-col>
          <v-col cols="11 calendarmain">
            <vc-date-picker
                    :attributes="attributes"
                    mode='range'
                    color= 'green'
                    v-model='range'
                    is-inline
                    is-required
                    @drag="getDate"
                    @input="getWeekend(); lateBooking(); minSpan(); $emit('update:range', range)"
                    :columns="$screens({ default: 1, lg: 2 })"
                    :min-date='new Date()' 
                    
                    >
              </vc-date-picker>
          </v-col>
          <v-col  cols="2" style="color: black"> </v-col>
          <!--<button  > khdfghfs  {{getWeekend()}}</button>  -->
          <v-col cols="10">
              <v-alert  
              v-if="alert"
                  dense
                  :value="alert"
                  outlined
                  type="error">
                  Abholung außerhalb der Öffnungszeiten <br>
                  <span style="fontSize: 12px	"> Buchung nur unter Vorbehalt möglich. Aufpreis: 150, -€ </span>
            </v-alert>
          </v-col>
          <v-col  cols="2" > </v-col>
          <v-col cols="10">
              <v-alert  
              v-if="lateBookingWarning"
                  dense
                  outlined
                  type="warning">
                  Bei Buchung das beginnt 3 Monate später <br>
                  <span style="fontSize: 12px	"> Bei Buchung das beginnt 3 Monate später muss mindestlaufzeit ein Monat oder länger sein</span>
            </v-alert>
          </v-col>
          <v-col  cols="2" > </v-col>
          <v-col cols="10">
              <v-alert  
              v-if="minRange"
                  dense
                  outlined
                  type="warning">
                  Augewählte Zeit ist weinger als 1 Tag<br>
                  <span style="fontSize: 12px	"> In diesem Fall wird Preis von 24 Stunden verrechnet?</span>
            </v-alert>
          </v-col>
    </v-row>    
  </div>
</template>

<script>
//import axios from '../../axios';
//import json from 'json';
import { mapActions } from "vuex";
export default {
    props: {
    method: { type: Function },
    data: {type: Boolean}
  },
    data()   {
    return {
      datta: "kjfjh",
      latedays: Number,
      totalDays: Number,
      minRange: false,
      lateBookingWarning: false,
      endDayCountFromNow: Number,
      startDayCountfromNow: Number,
      alert: false,
      range: {
        start: new Date(),    // 8
      },
     attributes: [
        {
          
        key: 'today',
        highlight: {
           color: 'grey',
           fillMode: 'light',
           contentClass: 'italic', // Class provided by TailwindCSS
        },
        dates: {
           start: new Date(2019, 0, 1),  // Jan 1st, 2018
           end: new Date(2030, 0, 1),    // Jan 1st, 2019
           weekdays: [1, 7]  ,
                     // ...on Sundays and Saturdays
        },
        },
    ],
      
    };
    },

    
    methods : {
       ...mapActions(["checkTotalDays"]),
    
    getDate () {
      var date1 = this.range.start; 
      var date2 = this.range.end; 

      // To calculate the time difference of two dates 
      if (date1 && date2){
       var differenceTime = date2.getTime() - date1.getTime(); 
      this.totalDays = Math.ceil(differenceTime / (1000 * 3600 * 24) ); 
      console.log('totaldays', this.totalDays)
      this.$emit('startDate', date1)
      this.$emit('endDate', date2)
      }
      this.checkTotalDays(this.totalDays);
      return date1, date2, this.totalDays
    },
     getWeekend() {
         var startDay = this.range.start;
         var endDay = this.range.end;
         //console.log('GET day', startDay.getDay())

    if ((startDay.getDay() === 6 || startDay.getDay() === 0) || (endDay.getDay() === 6 || endDay.getDay() === 0) )  {
      
       this.alert=true;
       console.log("TOTAL DAYS", this.totalDays)
     
       
    } else {
        this.alert=false
       console.log("Start dayThis Alert FALSE")
    }
  
  },
  minSpan(){
    if (this.totalDays ===0) {
      this.minRange = true;
    } else {
      this.minRange = false;
    }
  },
 lateBooking (){
      let today = new Date();
      let threeMonth = this.range.start.getTime()-today.getTime();
      this.startDayCountfromNow = Math.floor(threeMonth/ (1000 * 3600 * 24));
      this.endDayCountFromNow= Math.floor((this.range.end.getTime()-today.getTime())/ (1000 * 3600 * 24));
    
      if(this.totalDays && (this.endDayCountFromNow>0)){
       // console.log(this.startDayCountfromNow, this.totalDays)
        //console.log("THIS RANGE END", this.endDayCountFromNow)
         if ((this.startDayCountfromNow > 90) && (this.totalDays < 20)){
           this.lateBookingWarning= true;
           //console.log("Nicht erlaubt!!!!!!!!!!!!!!!!!!!!!!!!!!", this.startDayCountfromNow, this.totalDays)
      } else {
          this.lateBookingWarning= false;
          //console.log("NOW ERLAUBT!!!!!!!!!", this.startDayCountfromNow, this.totalDays)
      }
      this.$emit('buttonDisabled', this.lateBookingWarning)
      
      }
  },



 
} ,  


/*beforeCreate : function() {
  console.log('beforeCreate()')
},
created : function() {
  console.log('created()', this)
},
beforeMount : function() {
  console.log('beforeMount()')
},

mounted : function() {
  console.log('mounted()')
},

beforeUpdate : function() {
  console.log('beforeUpdate()')
},

updated : function() {
  console.log('updated')

},

beforeDestroy : function() {
  console.log('beforeDestroy()')
},

destroyed : function() {
  console.log('destroyed()')
}, */

//Für letzte neueste Zustand von totaldays zu bekommen
  watch: {
      totalDays: function(totalDays) {
        console.log('DATA TO BE WATHCED', totalDays)
          //do something when the data changes.
          if (totalDays === 0) {
              this.minSpan();
          } else if (totalDays){
             this.minSpan();
              this.lateBooking();
          }
      },
       lateBookingWarning: function() {
       this.lateBooking()
      }
     
  },

};
</script>
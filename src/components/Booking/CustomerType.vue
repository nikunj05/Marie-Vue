<template>
  <v-row justify="center">
    <v-row justify="start"  style="width: 100%;">
       <v-col cols="10" md="3"  >
         <button large block 
             color="white" 
             class=" font-weight-regular toggleButton"
             v-on:click="toggleClass1" v-bind:class="{active: isActive1}"
             >PrivatKunde
          </button>
         </v-col>

          <!-- <v-spacer></v-spacer> -->
          <v-col cols="10" md="3" >
            <button  large color="white" 
               block  
               class=" font-weight-regular toggleButton"
               v-on:click="toggleClass2" 
               v-bind:class="{active: isActive2}"
               >Firmenkunde
            </button>
          </v-col> 

            <v-col cols="12" md="12">
             <v-text-field 
                solo label="Firmenname"
                name="companyName"
                v-if="compCustomer"
                type="text" v-model="companyName" 
                @keyup="$emit('update:companyName', companyName)"
                 :rules="[v => !!v || 'Dieses Feld ist erforderlich']"
                required
                ></v-text-field>
           </v-col>
      

          
    </v-row>    

 
    
  </v-row>
</template>

<script>
export default {
  data: () => ({
     isActive1: false,
      isActive2: false,
      compCustomer: false,
      companyName: '',
   
  }),
  methods: {
      toggleClass1: function() {
      this.isActive1 = true ;
      this.isActive2 = !this.isActive1;
    },
    toggleClass2: function() {
      this.isActive2 = true;
      this.isActive1 = !this.isActive2;
    } ,
    companyForm() {
        console.log("isActive2 from func " + this.isActive2)
       this.compCustomer =true;
       console.log("compCustomer" +this.compCustomer) 
    },
   
    
  },
   watch: {
      isActive2: function(val){
          if(val){
               this.compCustomer=true;
               this.companyForm()
          } else {
              this.compCustomer = false;
          }  
      },
      

      
       
   },
};
</script>

<style scoped>


</style>
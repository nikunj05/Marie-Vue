<template>
<div>
    <!-- <v-row justify="start"> -->
       <v-col offset-md="1" cols="11" class="pt-0 pb-8 ">
         <v-row>
         <v-col class="pr-0">
         <button block 
             color="white" 
             class=" font-weight-regular toggleButton"
             v-on:click="toggleClass1" v-bind:class="{active: isActive1}"
             >PrivatKunde
          </button>
         </v-col>

          <!-- <v-spacer></v-spacer> -->
          <v-col class="pl-0 pr-0">
            <button color="white" 
               block  
               class=" font-weight-regular toggleButton"
               v-on:click="toggleClass2" 
               v-bind:class="{active: isActive2}"
               >Firmenkunde
            </button>
          </v-col> 
         </v-row>
       </v-col>

            <v-col cols="11" offset-md="1" class="pr-0" v-if="compCustomer">
             <v-text-field 
                solo label="Firmenname"
                name="companyName"
                
                type="text" v-model="companyName" 
                @keyup="$emit('update:companyName', companyName)"
                 :rules="[v => !!v || 'Dieses Feld ist erforderlich']"
                required
                hide-details
                ></v-text-field>
           </v-col>
      

</div>
    <!-- </v-row>     -->

 
    
</template>

<script>
export default {
  data: () => ({
     isActive1: true,
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
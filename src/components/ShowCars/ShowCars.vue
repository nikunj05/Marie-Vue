<template>
<div class="inner-container-home">
  <v-row justify="center" align="center">
<v-col cols="12" class="show-cars" align="center" justify="center">
 <v-row align="center">
   <router-link
        tag="div" 
        :to="'/select-car'" 
         v-for="car in carsList"
        :key="car.id">
  <v-col cols="12" md="4" > 
       <v-card
       hover
    class="mx-auto shape"
    max-width="344"
  >
         <div class="car-border">
           <img :src="require('@/assets/border.jpg')">
         </div>
        <p class="car-title">{{car.name}}</p>
        <hr class="hr-line">
        <p class="car-text">ab <span class="car-price-number" >42 €</span> </p>
      
      <div class="newtag">
        <div class="tag-body"></div>
        <div class="tag-text">new</div>
     </div> 
         <p class="car-text-xs">inkl. Mwst</p>
        <v-avatar
            class="car-img"
            size="200"
            tile>
                <v-img  contain :src="car.src"></v-img>
        </v-avatar>
       </v-card>
  </v-col>
  
</router-link>
 </v-row>
 </v-col>
  
      </v-row>
    </div>
</template>


<script>
export default {
    data: () => ({
      carsList : [
          {
              id: 0,
              name: 'Volskwagen e-GOlf',
              src: require('@/assets/mercedes.png'),
          },
            {
              id: 1,
              name: 'Volskwagen e-GOlf',
              src: require('@/assets/mercedes.png'),
          },{
             id: 2,
              name: 'Volskwagen e-GOlf',
              src: require('@/assets/mercedes.png'),
          },
            {
              id: 3,
              name: 'Volskwagen e-GOlf',
              src: require('@/assets/mercedes.png'),
          },{ 
             id: 4,
              name: 'Volskwagen e-GOlf',
              src: require('@/assets/mercedes.png'),
          },
            {
              id: 5,
              name: 'Volskwagen e-GOlf',
              src: require('@/assets/mercedes.png'),
          }

      ]
          
        
    }),
     methods : {
        navigateToCars(){
         setTimeout(() => (this.$router.push({path: '/select-car'})), 1000)
        }
    },
}
</script>

<style src="./ShowCars.scss" lang="scss"></style> 
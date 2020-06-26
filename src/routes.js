import ShowCars from './components/ShowCars/ShowCars.vue';
import SelectCarForm from './components/SelectCar/SelectCarForm.vue';
import CarOffers from './components/CarOffers/CarOffers.vue';
import CarDetails from './components/CarDetails/CarDetails.vue';
import BookingForm from './components/Booking/BookingForm.vue';
import BookedCar from './components/Booking/BookedCar.vue';


export const routes = [
    {path: '/', name: 'home', components: {
        default: ShowCars,
        showcars: ShowCars
    }},

    {path: '/select-car', component: SelectCarForm},

    {path: '/offered-cars', components: {
        default: CarOffers,
    }},

{path: '/offered-cars/:id', name : 'details', component: CarDetails},
{path: '/booking-form', components: {
    default: BookingForm
} },
{path: '/booked-car', component: BookedCar},

//{ path: '*', redirect: '/' } 
    
    
]




import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Nieuws from '@/views/Nieuws.vue'
import OverOns from '@/views/OverOns.vue'
import OnzeKappar from '@/views/OnzeKappar.vue'



const router = createRouter({

  history: createWebHistory(),

  routes: [

    {
      path:'/',
      component:Home
    },

    {
      path:'/contact',
      component:Contact
    },
    
    {
      path:'/onzeKappar',
      component:OnzeKappar
    },
     {
      path:'/nieuws',
      component:Nieuws
    },
     
    
    {
      path:'/overOns',
      component:OverOns
    }
    




  ]

})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue') //Lazy loading>Si se hace el import con arrow function, no se necesita hacer import al comienzo
  },
  {
    path: '/wizards',
    name: 'wizards',
    component: () => import('../views/WizardsList.vue')
  },
  {
    path: '/wizard/:id',
    name: 'Wizard',
    props: true,
    component: () => import('../views/Wizard.vue')
  },
  { 
    path: '/films',
    component: () => import('../views/Films.vue'),
    children: [
        {
            path: 'piedra-filosofal',
            component: () => import('../components/ThePhilosopherStone.vue')
        },
        {
            path: 'camara-secreta',
            component: () => import('../components/TheChamberSecrets.vue')
        }
    ]
},
{
  path: '/favourites',
  name: 'favourites',
  component: () => import('../views/FavWizardCard.vue')
},
  { path: '*', component: () => import('../views/PageNotFound.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

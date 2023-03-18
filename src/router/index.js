import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProjetPageView from "../views/ProjetPageView.vue"
import ContactView from '../views/ContactView.vue'
import ListeProjetView from '../views/ListeProjetView.vue'
import Page404View from '../views/Page404View.vue'
import ProfilView from '../views/ProfilView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/projet', name: 'ProjetView', component: ProjetPageView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/projets', name: 'ListeProjetView', component: ListeProjetView },   
    { path: '/:pathMatch(.*)*', name: '404View', component: Page404View }, // '/:pathMatch(.*)*'
    { path: '/profil', name: 'ProfilView', component: ProfilView }, 
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '@/components/login.vue'
import CreationCamp from '@/page/creationCamp.vue'
import signupPage from '@/page/signupPage.vue'
import showCamp from '@/page/showCamp.vue'
import addMonsterPage from '@/page/addMonsterPage.vue'
import profilPage from '@/page/profilPage.vue'

const routes = [
  { path: '/', component: UserLogin },
  { path: '/App', component: UserLogin },
  { path: '/creationCamp', component: CreationCamp },
  { path: '/signupPage', component: signupPage },
  { path: '/showCamp', component: showCamp },
  { path: '/addMonsterPage', component: addMonsterPage },
  { path: '/profilPage', component: profilPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // Liste des routes qui ne nécessitent pas d'authentification
  const publicPages = ['/login','/', '/signupPage'];

  // Vérifie si la route nécessite une authentification
  const authRequired = !publicPages.includes(to.path);

  // Récupère le token du localStorage
  const token = localStorage.getItem('token');

  // Si l'authentification est requise et qu'il n'y a pas de token, redirige vers la page de login
  if (authRequired && !token) {
    return next('/login');
  }

  // Sinon, continue la navigation
  next();
});
export default router

// formCamp
// signUp
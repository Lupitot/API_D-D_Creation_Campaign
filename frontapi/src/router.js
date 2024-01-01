import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '@/components/login.vue'
import CreationCamp from '@/page/creationCamp.vue'
import signupPage from '@/page/signupPage.vue'
import showCamp from '@/page/showCamp.vue'
import addMonsterPage from '@/page/addMonsterPage.vue'
import profilPage from '@/page/profilPage.vue'
import modifCamp from '@/page/modifCamp.vue'


const routes = [
  {
    path: '/',
    component: UserLogin,
    beforeEnter: (to, from, next) => {
      // Réinitialiser le token
      localStorage.removeItem('token');
      next();
    }
  },
  {
    path: '/App',
    component: UserLogin,
    beforeEnter: (to, from, next) => {
      // Réinitialiser le token
      localStorage.removeItem('token');
      next();
    }
  },
  {
    path: '/login',
    component: UserLogin,
    beforeEnter: (to, from, next) => {
      // Réinitialiser le token
      localStorage.removeItem('token');
      next();
    }
  },
  {
    path: '/signupPage',
    component: signupPage,
    beforeEnter: (to, from, next) => {
      // Réinitialiser le token
      localStorage.removeItem('token');
      next();
    }

  },
  {
    path: '/creationCamp',
    component: CreationCamp,
    beforeEnter: (to, from, next) => {
      localStorage.getItem('createCamp');
      if (!localStorage.getItem('createCamp')) {
        next(false);
      } else {
        next();
      }
    }

  },
  {
    path: '/showCamp',
    component: showCamp,

  },
  {
    path: '/addMonsterPage',
    component: addMonsterPage,

  },
  {
    path: '/profilPage',
    component: profilPage,

  },
  {
    path: '/modifCamp',
    component: modifCamp,
    beforeEnter: (to, from, next) => {
      localStorage.getItem('currentCampId');
      if (!localStorage.getItem('currentCampId')) {
        next(false);
      } else {
        next();
      }
    }
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // Liste des routes qui ne nécessitent pas d'authentification
  const publicPages = ['/login', '/', '/signupPage'];

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
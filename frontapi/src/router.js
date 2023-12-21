import { createRouter, createWebHistory } from 'vue-router'
import UserLogin from '@/components/login.vue'
import CreationCamp from '@/page/creationCamp.vue'
import formCamp from '@/components/formCamp.vue'

const routes = [
  { path: '/', component: UserLogin },
  { path: '/App', component: UserLogin },
  { path: '/creationCamp', component: CreationCamp, formCamp}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
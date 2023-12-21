import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js' 
createApp(App)
  .use(router) // Utilisez le routeur ici
  .mount('#app')
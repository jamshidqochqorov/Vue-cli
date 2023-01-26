import { createApp } from 'vue'
import App from './App.vue'
import '../assets/scss/main.scss'
import routers from './routes'


createApp(App).use(routers).mount('#app')

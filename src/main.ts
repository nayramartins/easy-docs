import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

import Home from './views/Home.vue'
import Details from './views/Details.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/details',
            name: 'Details',
            component: Details
        },
    ]
})

createApp(App)
.use(router)
.mount('#app')

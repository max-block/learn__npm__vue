import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import UserData from '../views/UserData.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/user-data', name: 'UserData', component: UserData},

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

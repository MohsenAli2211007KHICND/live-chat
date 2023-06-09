import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import ChatRoom from '../views/ChatRoom.vue'
import { projectAuth } from '@/firebase/config'

const requiredAuth = (to, from, next) => {
  const user = projectAuth.currentUser
  if(!user) {
    next({ name: 'WelcomeView'})
  }
  else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'WelcomeView',
    component: WelcomeView
  },
  {
    path: '/chatroom',
    name: 'ChatRoom',
    component: ChatRoom,
    beforeEnter: requiredAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

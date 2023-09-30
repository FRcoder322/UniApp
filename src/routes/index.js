import { createRouter, createWebHistory } from 'vue-router';  // Corrected import

import Landingpage from "./../components/Landingpage.vue";
import Login from "./../components/Login.vue";
import Signup from "./../components/Signup.vue";
import About_us from "./../components/About_us.vue";
import Register from "./../components/Register.vue"

const routes = [
  {
    path: '/',
    name: 'Landingpage',
    component: Landingpage,
  },
  {
    path: '/About_us',
    name: 'About_us',
    component: About_us,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path:'/About_us',
    name:'About_us',
    component:About_us
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;

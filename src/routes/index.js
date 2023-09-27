import Vue from 'vue'
import VueRouter from  'vue-router'
import Landingpage from "./components/Landingpage"
import Login from "./components/Login"
import Signup from "./components/Signup"
import About_us from "./components/About_us"


Vue.use (VueRouter)
const router= [
    {
    path:'/',
    name: 'Landingpage',
    component: Landingpage,
    },
    {
    path:'/About_us',
    name: 'About_us',
    component: About_us,
    },
    {
    path:'/Login',
    name: 'Login',
    component: Login,
    },
    {
    path:'/Signup',
    name: 'Signup',
    component: Signup,
    }
]
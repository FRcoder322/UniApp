<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import About_us from './components/About_us.vue';

</script>

<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
    <About_us/>
  </v-app>
</template>

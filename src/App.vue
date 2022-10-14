<script setup>
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import {computed, reactive} from "vue";
import {useDisplay} from "vuetify";

const {name, mdAndUp} = useDisplay();

const width = computed(() => {
  switch (name.value) {
    case 'xs':
      return '90vw'
    case 'sm':
      return '80vw'
    case 'md':
      return '65vw'
    case 'lg':
      return '45vw'
    case 'xl':
      return '45vw'
    case 'xxl':
      return '45fw'
  }
})
</script>

<template>
  <v-app>
    <Navbar/>
    <v-main>
      <v-responsive :width="width" class="mx-auto">
        <div id="about"></div>
        <About/>
        <div id="experience"></div>
        <Experience :class="mdAndUp ? 'mt-10' : 'mt-5'"/>
        <div id="portfolio"></div>
        <Portfolio :class="mdAndUp ? 'mt-10' : 'mt-5'"/>
        <div id="contact"></div>
        <Contact class="h-screen" :class="mdAndUp ? 'mt-10' : 'mt-5'"/>
      </v-responsive>
    </v-main>
  </v-app>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
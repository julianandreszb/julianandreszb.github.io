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
});

const sectionSpacer = reactive({'mt-10': mdAndUp, 'mt-5': !mdAndUp});

</script>

<template>
  <v-app>
    <Navbar/>
    <v-main>
      <v-responsive :width="width" class="mx-auto">
        <div id="about"></div>
        <About/>
        <div id="portfolio"></div>
        <Portfolio :class="sectionSpacer"/>
        <div id="experience"></div>
        <Experience :class="sectionSpacer"/>
        <div id="contact"></div>
        <Contact class="h-screen" :class="sectionSpacer"/>
      </v-responsive>
    </v-main>
  </v-app>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
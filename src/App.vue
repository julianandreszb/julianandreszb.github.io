<script setup>
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

const props = reactive({
  links: [
    'about me',
    'experience',
    'portfolio',
    'contact',
  ],
});
</script>

<template>
  <v-app>
    <v-app-bar density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon class="d-flex d-md-none"></v-app-bar-nav-icon>
      </template>
      <v-btn class="d-none d-md-flex" v-for="link in props.links" :key="link" text>
        {{ link }}
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-responsive :width="width" class="mx-auto">
        <About/>
        <Experience :class="mdAndUp ? 'mt-10' : 'mt-5'"/>
        <Portfolio :class="mdAndUp ? 'mt-10' : 'mt-5'"/>
        <Contact :class="mdAndUp ? 'mt-10' : 'mt-5'"/>
      </v-responsive>
    </v-main>
  </v-app>
</template>
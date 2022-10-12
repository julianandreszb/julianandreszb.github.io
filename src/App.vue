<script setup>
import Experience from './components/Experience.vue'
import About from './components/About.vue'
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
      return '70vw'
    case 'lg':
      return '65vw'
    case 'xl':
      return 800
    case 'xxl':
      return 800
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
      </v-responsive>
    </v-main>
  </v-app>
</template>
<script setup>
import profileLogo from '../assets/profile-photo.png'
import {reactive} from "vue";

const state = reactive({
  ecosystem: [
    {
      text: 'vuetify-loader',
      href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
    },
    {
      text: 'github',
      href: 'https://github.com/vuetifyjs/vuetify/tree/next',
    },
    {
      text: 'awesome-vuetify',
      href: 'https://github.com/vuetifyjs/awesome-vuetify',
    },
  ],
  importantLinks: [
    {
      text: 'Chat',
      href: 'https://community.vuetifyjs.com',
    },
    {
      text: 'Made with Vuetify',
      href: 'https://madewithvuejs.com/vuetify',
    },
    {
      text: 'Twitter',
      href: 'https://twitter.com/vuetifyjs',
    },
    {
      text: 'Articles',
      href: 'https://medium.com/vuetify',
    },
  ],
  profileLogo,
  whatsNext: [
    {
      text: 'Explore components',
      href: 'https://vuetifyjs.com',
    },
    {
      text: 'Roadmap',
      href: 'https://vuetifyjs.com/introduction/roadmap/',
    },
    {
      text: 'Frequently Asked Questions',
      href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
    },
  ],
});

</script>


<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-avatar class="gradient-profile-logo" :image="state.profileLogo" size="150"></v-avatar>
      </v-col>
      <v-col cols="12" class="mb-4">
        <h2 class="font-weight-light text-medium-emphasis letter-spacing-x3">
          Julian Zapata
        </h2>
        <h1 class="text-h4 font-weight-black">Full-Stack Web Developer</h1>
      </v-col>
      <v-col cols="12" class="mb-4 text-left">
        <p class="font-weight-light profile-text-description text-medium-emphasis">
          Passionate for learning. I've worked as back-end developer for more than 9 years already. I’m moving to the
          front-end environment and focusing on getting an advanced level in JavaScript, HTML, CSS, and VueJS.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.gradient-profile-logo {
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #50b2c8 46%, #FFCC70 100%);
  filter: saturate(1.5);
}

.letter-spacing-x3 {
  letter-spacing: 3px;
}

.profile-text-description {
  font-size: 1.4rem;
}
</style>
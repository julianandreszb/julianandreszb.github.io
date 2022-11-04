<script setup>
import {reactive} from "vue";
import chatApp from '../assets/chat-app-thumbnail.png'

const state = reactive({
  cards: [
    {
      title: 'CHAT-APP',
      imgSrc: chatApp,
      flex: 6,
      githubRepositoryUrl: "https://github.com/julianandreszb/chat-app",
      githubPagesUrl: "https://julianandreszb.github.io/chat-app"
    },
    {
      title: 'Coming soon...',
      imgSrc: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      flex: 6,
      githubRepositoryUrl: "#",
      githubPagesUrl: "#"
    },
    {
      title: 'Coming soon...',
      imgSrc: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
      flex: 6,
      githubRepositoryUrl: "#",
      githubPagesUrl: "#"
    },
  ],
})
</script>

<template>
  <v-container>
    <v-card>
      <v-img
          height="200"
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          cover
          class="text-black mb-10"
      >
        <v-layout full-height>
          <v-app-bar
              density="comfortable"
              color="rgba(0, 0, 0, 0)"
              flat
              theme="dark"
          >

            <v-app-bar-title class="text-h6 font-weight-medium text-uppercase">
              Portfolio
            </v-app-bar-title>
          </v-app-bar>
        </v-layout>
      </v-img>

      <v-container fluid>
        <v-row dense>
          <v-col
              v-for="card in state.cards"
              :key="card.title"
              :cols="card.flex"
          >
            <v-card>
              <v-img
                  :src="card.imgSrc"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                  cover
              >
                <v-card-title class="text-white" v-text="card.title"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :href="card.githubRepositoryUrl" target="_blank" size="small" color="surface-variant"
                       variant="text" icon="mdi-github"></v-btn>
                <v-btn :href="card.githubPagesUrl" target="_blank" size="small" color="surface-variant"
                       variant="text" icon="mdi-eye"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>
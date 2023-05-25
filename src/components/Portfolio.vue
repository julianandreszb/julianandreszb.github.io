<script setup>
import {reactive} from "vue";
import chatApp from '../assets/chat-app-thumbnail.png'
import binaryToDecimal from '../assets/binary-to-decimal-thumbnail.png'

const state = reactive({
  cards: [
    {
      title: 'BINARY TO DECIMAL',
      imgSrc: binaryToDecimal,
      flex: 6,
      githubRepositoryUrl: "https://github.com/julianandreszb/binary-to-decimal",
      githubPagesUrl: "https://julianandreszb.github.io/binary-to-decimal",
      figmaUrl: 'https://www.figma.com/file/Y79lY65OXYTwbRMSw9OzmN/BinarioDecimal?type=design&node-id=0%3A1&t=pxoBAoRmjRITLzps-1',
    },
    {
      title: 'CHAT-APP',
      imgSrc: chatApp,
      flex: 6,
      githubRepositoryUrl: "https://github.com/julianandreszb/chat-app",
      githubPagesUrl: "https://julianandreszb.github.io/chat-app",
      figmaUrl: "https://www.figma.com/file/hTVvbDzstq2rGFMqLNMbcX/Practice%3A-Chat-App-Homepage-Design-(Copy)?type=design&t=pxoBAoRmjRITLzps-1",
    },
  ],
})
</script>

<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="100%"  >
      <v-img
          height="200"
          src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          :cover="true"
          class="text-black mb-10"
      >
        <v-layout full-height>
          <v-app-bar
              density="comfortable"
              color="rgba(0, 0, 0, 0)"
              :flat="true"
              theme="dark"
          >

            <v-app-bar-title class="text-h6 font-weight-medium text-uppercase">
              Portfolio
            </v-app-bar-title>
          </v-app-bar>
        </v-layout>
      </v-img>

      <v-container :fluid="true">
        <v-row :dense="true">
          <v-col
              v-for="card in state.cards"
              :key="card.title"
              :cols="card.flex"
          >
            <v-card>
              <a class="card-image-link" :href="card.githubPagesUrl" target="_blank">
                <v-img
                    :src="card.imgSrc"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                    :cover="true"
                >
                  <v-card-title class="text-white" v-text="card.title"></v-card-title>
                </v-img>
              </a>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :href="card.githubRepositoryUrl" target="_blank" size="small" color="surface-variant"
                       variant="text" icon="mdi-github" title="Git Repository"></v-btn>
                <v-btn :href="card.githubPagesUrl" target="_blank" size="small" color="surface-variant"
                       variant="text" icon="mdi-eye" title="Demo" ></v-btn>
                <v-btn :href="card.figmaUrl" target="_blank" size="small" color="surface-variant"
                       variant="text" icon="mdi-view-dashboard" title="Figma Design" ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    </v-row>
  </v-container>
</template>

<style scoped>
.card-image-link {
  text-decoration: none;
}
</style>
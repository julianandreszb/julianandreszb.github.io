<script setup>

import {reactive} from "vue";

const state = reactive({
  experiences: [
    {
      from: 'LIFEFILE LLC',
      message: `Create: PHP modules and user interfaces in VueJS. Mobile applications using
        Phonegap (Cordova). APIs using Laravel + OpenAPI Specification`,
      time: 'Feb 2013 - Present',
      color: 'green',

      badges: [
        {name: "Zend" },
        {name: "Laravel", color: "red" },
        {name: "VueJS", color: "green" },
        {name: "MySQL", color: "blue" },
        {name: "Phonegap (Cordova)" },
      ]
    },
    {
      from: 'ONLY-ONE',
      message: 'Website maintenance OnlyOne and creating new modules',
      time: 'January 2015 - April 2015',
      color: 'green',

      badges: [
        {name: "Zend" },
        {name: "MySQL", color: "blue" },
        {name: "Bootstrap", color: "primary" },
      ]
    },
    {
      from: 'FREELANCE DEVELOPER',
      message: 'Create "PAE" (School feeding program) application using the Symfony 2 + bootstrap',
      time: 'Aug 2012 - Dec 2012',
      color: 'green',
      badges: [
        {name: "Symfony 2" },
        {name: "MySQL", color: "blue" },
        {name: "Bootstrap", color: "primary" },
      ]
    },
  ],
});

</script>

<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="100%">
        <v-img
            height="200"
            src="https://media.istockphoto.com/photos/close-up-of-a-professional-office-specialist-working-on-desktop-in-picture-id1316574146?k=20&m=1316574146&s=612x612&w=0&h=_mhEkg8Sqz_fENUzmaE4IYtyT8_utoP9476-IECwyZo="
            cover
            class="text-white"
        >
          <v-layout full-height>
            <v-app-bar
                density="comfortable"
                color="rgba(0, 0, 0, 0)"
                flat
                theme="dark"
            >

              <v-app-bar-title class="text-h6 font-weight-medium text-uppercase">
                Experience
              </v-app-bar-title>
            </v-app-bar>
          </v-layout>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-1 mb-2">
            Today
          </div>

          <v-timeline
              density="compact"
              truncate-line="none"
          >
            <v-timeline-item
                v-for="message in state.experiences"
                :key="message.time"
                :dot-color="message.color"
                size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-medium">
                  <strong>{{ message.from }}</strong>
                </div>
                <div class="font-weight-light">
                  <strong>{{ message.time }}</strong>
                </div>
                <!--                <div >{{ message.message }}</div>-->
                <div>
                  <v-chip v-for="badge in message.badges " :color="badge.color" class="ma-2">{{ badge.name }}</v-chip>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>
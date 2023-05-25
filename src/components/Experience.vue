<script setup>

import {reactive} from "vue";

const state = reactive({
  experiences: [
    {
      from: 'FREELANCE',
      message: `Create CRUD modules in PHP & VueJS. Integrate with external systems|APIs. Integrate with QuickBooks Desktop and QuickBooks Online.
      Create mobile applications using Phonegap (Cordova). Migrate legacy modules from Zend to Laravel. Create the LifeFile's API using Laravel + OpenAPI Specification.`,
      time: 'March 2019 - Present',
      color: 'green',

      badges: [
        {name: "Vue ^3 (Composition API)", color: "green"},
        {name: "NodeJS", color: "#006400"},
        {name: "MongoDB", color: "#000000"},
        {name: "Vuetify", color: "#1867c0"},
      ]
    },
    {
      from: 'LIFEFILE LLC',
      message: `Create CRUD modules in PHP & VueJS. Integrate with external systems|APIs. Integrate with QuickBooks Desktop and QuickBooks Online.
      Create mobile applications using Phonegap (Cordova). Migrate legacy modules from Zend to Laravel. Create the LifeFile's API using Laravel + OpenAPI Specification.`,
      time: 'Feb 2013 - Present',
      color: 'green',

      badges: [
        {name: "Laravel", color: "red"},
        {name: "Vue ^2.7", color: "green"},
        {name: "MySQL", color: "blue"},
        {name: "Git", color: "#e84d31"},
        {name: "PWA"},
        {name: "Zend"},
        {name: "Subversion", color: "#7c97c3"},
        {name: "Phonegap (Cordova)"},
      ]
    },
    {
      from: 'ONLY-ONE',
      message: 'OnlyOne website maintenance. Create new modules.',
      time: 'January 2015 - April 2015',
      color: 'green',

      badges: [
        {name: "Zend"},
        {name: "MySQL", color: "blue"},
        {name: "Bootstrap ^3", color: "primary"},
      ]
    },
    {
      from: 'FREELANCE',
      message: 'Create "PAE" (School feeding program) application using the Symfony 2 framework + bootstrap.',
      time: 'Aug 2012 - Dec 2012',
      color: 'green',
      badges: [
        {name: "Symfony 2"},
        {name: "MySQL", color: "blue"},
        {name: "Bootstrap ^2", color: "primary"},
      ]
    },
  ],
});

</script>

<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="100%"  >
        <v-card-title class="text-h6 font-weight-medium text-uppercase">
          Experience
        </v-card-title>
        <v-card-text>
          <div class="font-weight-bold ml-1 mb-2">
            Today
          </div>

          <v-timeline
              density="compact"
          >
            <v-timeline-item
                v-for="message in state.experiences"
                :key="message.time"
                :dot-color="message.color"
                size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-bold">
                  <strong>{{ message.from }}</strong>
                </div>
                <div class="font-weight-light text-medium-emphasis">
                  <strong>{{ message.time }}</strong>
                </div>
                <div v-if="false" >
                  <p class="text-experience-description my-3 timeline-text font-weight-light">{{ message.message }}</p>
                </div>
                <div>
                  <v-chip v-for="badge in message.badges " :color="badge.color" class="ma-2 font-weight-bold">{{ badge.name }}</v-chip>
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
.text-experience-description {
  max-width: 60ch;
}
.timeline-text {
  font-size: 1.25rem;
}
</style>
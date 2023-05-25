<script setup>

import {reactive} from "vue";

const state = reactive({
  skills: [
    {
      from: 'FRONT-END',
      color: 'black',
      badges: [
        {name: "Vue 2 | Vue 3", color: "green"},
        {name: "JavaScript", color: "#cfb431"},
        {name: "TypeScript", color: "#2f74c0"},
        {name: "CSS/SCSS", color: "#2f74c0"},
        {name: "HTML 5", color: "blue"},
        {name: "PWA"},
      ]
    },
    {
      from: 'BACK-END',
      // message: `Create CRUD modules in PHP & VueJS. Integrate with external systems|APIs. Integrate with QuickBooks Desktop and QuickBooks Online.
      // Create mobile applications using Phonegap (Cordova). Migrate legacy modules from Zend to Laravel. Create the LifeFile's API using Laravel + OpenAPI Specification.`,
      // time: 'March 2019 - Present',
      color: 'black',

      badges: [
        {name: "PHP", color: "#607bb1"},
        {name: "Laravel", color: "red"},
        {name: "NodeJS", color: "#006400"},
      ]
    },{
      from: 'DATABASES',
      // message: `Create CRUD modules in PHP & VueJS. Integrate with external systems|APIs. Integrate with QuickBooks Desktop and QuickBooks Online.
      // Create mobile applications using Phonegap (Cordova). Migrate legacy modules from Zend to Laravel. Create the LifeFile's API using Laravel + OpenAPI Specification.`,
      // time: 'March 2019 - Present',
      color: 'black',

      badges: [
        {name: "MySQL", color: "#f29d17"},
        {name: "MongoDB", color: "#01e561"},
      ]
    },
    {
      from: 'TOOLS | OTHERS',
      color: 'black',
      badges: [
        {name: "Git", color: "#e84d31"},
        {name: "Clean Code", color: "#3c4d5c"},
        {name: "SOLID", color: "#1e4c78"},
        {name: "Design Patterns", color: "#000"},
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
          Skills
        </v-card-title>
        <v-card-text>

          <v-timeline
              density="compact"
          >
            <v-timeline-item
                v-for="message in state.skills"
                :key="message.from"
                :dot-color="message.color"
                size="x-small"
            >
              <div class="mb-4">
                <div class="font-weight-bold">
                  <strong>{{ message.from }}</strong>
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

</style>
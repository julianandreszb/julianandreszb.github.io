<script setup>
import {reactive, ref, watch} from "vue";
import {useDisplay} from "vuetify";

const {name, mdAndUp} = useDisplay();

const drawer = ref(false);


watch(mdAndUp, (newMdAndUp) => {
  if(newMdAndUp){
    drawer.value = false;
  }
});

const props = reactive({
  links: [
    {label: "about me", href: "about"},
    {label: "skills", href: "skills"},
    {label: "experience", href: "experience"},
    {label: "portfolio", href: "portfolio"},
    {label: "contact", href: "contact"},
  ],
});

</script>

<template>
  <v-container>
    <v-app-bar density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"  class="d-flex d-md-none"></v-app-bar-nav-icon>
      </template>
      <v-btn class="d-none d-md-flex" v-for="link in props.links" :key="link.href"  :href="`#${link.href}`" >
        {{ link.label }}
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        bottom
        :temporary="true"
    >

      <v-list :nav="true" dense>
          <v-list-item @click.stop="drawer = !drawer" class="text-uppercase" :href="`#${link.href}`" v-for="link in props.links" :key="link.href" >{{ link.label }}</v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<style scoped>

</style>
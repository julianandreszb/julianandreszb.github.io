<script setup>
//import { RouterView } from "vue-router";
//import SplashBackdrop from "@/components/SplashBackdrop.vue";
import { ref, onMounted } from "vue";
import NavBar from "@/components/NavBar.vue";

let isPageLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isPageLoading.value = false;
  }, 3200);
});
</script>

<template>
  <main
    class="h-full grid grid-cols-[4rem_8fr_4rem] grid-rows-[4rem_auto_2rem] gap-0.5"
  >
    <NavBar class="bg-blue-500 col-span-3" />
    <div class="bg-blue-400"></div>
    <div class="bg-blue-400"></div>
    <div class="bg-blue-400"></div>
    <div class="bg-blue-400 col-span-3"></div>
  </main>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
</style>

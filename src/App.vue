<script setup>
import { RouterView } from "vue-router";
import SplashBackdrop from "@/components/SplashBackdrop.vue";
import { ref, onMounted } from "vue";
import NavBar from "@/components/NavBar.vue";

let isPageLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isPageLoading.value = false;
    this.$router.replace("");
  }, 3200);
});
</script>

<template>
  <SplashBackdrop v-if="isPageLoading" />
  <main
    v-if="!isPageLoading"
    class="h-full grid grid-cols-[4rem_8fr_4rem] grid-rows-[3.5rem_auto_2rem]"
  >
    <NavBar class="bg-blue-500 col-span-3" />
    <div class="bg-dark-blue" data-test="nav-left-social-media" />
    <div class="bg-dark-blue" data-test="container">
      <RouterView />
    </div>
    <div class="bg-dark-blue" data-test="nav-right-mailto" />
    <div class="bg-dark-blue col-span-3" data-test="footer" />
  </main>
</template>

<style>
@import "@/assets/base.css";
/*@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");*/
</style>

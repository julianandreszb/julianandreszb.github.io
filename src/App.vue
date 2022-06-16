<script setup>
import { RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import SplashBackdrop from "@/components/SplashBackdrop.vue";
import NavBar from "@/components/NavBar.vue";
import IconHexagon from "@/components/icons/IconHexagon.vue";
import constants from "@/assets/constants";

let isPageLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isPageLoading.value = false;
  }, 3200);
});
</script>

<template>
  <SplashBackdrop v-if="isPageLoading" />
  <main
    v-if="!isPageLoading"
    class="h-full grid grid-cols-[4rem_8fr_4rem] grid-rows-[6rem_auto_2rem]"
  >
    <!-- Begin header section   -->
    <div class="bg-dark-blue flex justify-center">
      <IconHexagon
        class="w-11"
        :msg="constants.HEXAGON_ICON_TEXT"
        :enable-animation="false"
      />
    </div>
    <NavBar></NavBar>
    <div class="bg-dark-blue"></div>
    <!-- End header section  -->

    <!-- Begin content section  -->
    <div class="bg-dark-blue" />
    <div class="bg-dark-blue">
      <RouterView />
    </div>
    <div class="bg-dark-blue" />
    <!-- End content section  -->

    <!-- Begin footer section  -->
    <div class="bg-dark-blue col-span-3" />
    <!-- End footer section  -->
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>

<script setup>
import { RouterView } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import SplashBackdrop from "@/components/SplashBackdrop.vue";
import SplashBackdropMenu from "@/components/SplashBackdropMenu.vue";
import NavBar from "@/components/NavBar.vue";

let isPageLoading = ref(true);
let isBackDropMenuOpen = ref(false);

function resize(event) {
  if (isBackDropMenuOpen.value && event.target.innerWidth >= 770) {
    toggleBackdropMenu();
  }
}
function toggleBackdropMenu() {
  isBackDropMenuOpen.value = !isBackDropMenuOpen.value;
  document.body.classList.toggle("overflow-hidden");
}

onMounted(() => {
  setTimeout(() => {
    isPageLoading.value = false;
  }, 3200);

  window.addEventListener("resize", resize);
});
onUnmounted(() => {
  window.removeEventListener("resize", resize);
});
</script>

<template>
  <SplashBackdropMenu
    v-if="isBackDropMenuOpen"
    @click="toggleBackdropMenu"
    class="cursor-pointer"
  />
  <div id="aboutMe" class="h-full relative">
    <SplashBackdrop v-if="isPageLoading" />
    <main v-if="!isPageLoading" class="h-full relative">
      <!-- Begin header section   -->
      <div class="h-[4rem] fixed bg-dark-blue-alpha drop-shadow-xl">
        <NavBar @toggle-backdrop-menu="toggleBackdropMenu"></NavBar>
      </div>
      <!-- End header section  -->

      <div class="h-full grid grid-cols-1 grid-rows-[4rem_auto]">
        <div class="bg-dark-blue"></div>

        <!-- Begin content section  -->
        <div class="bg-dark-blue">
          <RouterView :class="isBackDropMenuOpen ? 'blur-sm' : ''" />
        </div>
        <!-- End content section  -->
      </div>
    </main>
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>

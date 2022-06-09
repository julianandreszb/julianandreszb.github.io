<script setup>
import SplashBackdrop from "@/components/SplashBackdrop.vue";
import { ref, onMounted } from "vue";
import NavBar from "@/components/NavBar.vue";

let isPageLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isPageLoading.value = false;
  }, 4000);
});
</script>

<template>
  <main>
    <SplashBackdrop v-if="isPageLoading" />
    <div
      v-if="!isPageLoading"
      class="w-screen h-screen bg-dark-blue flex flex-col"
    >
      <NavBar />
    </div>
  </main>
</template>

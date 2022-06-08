<script setup>
import SplashBackdrop from "@/components/SplashBackdrop.vue";
import { ref, onMounted } from "vue";

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
    <div v-if="!isPageLoading">
      <h1>Hello World!</h1>
    </div>
  </main>
</template>

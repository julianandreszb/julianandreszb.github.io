<script setup>
import { RouterView } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import SplashBackdrop from "@/components/SplashBackdrop.vue";
import SplashBackdropMenu from "@/components/SplashBackdropMenu.vue";
import NavBar from "@/components/NavBar.vue";

let isPageLoading = ref(true);
let isBackDropMenuOpen = ref(false);

function resize(event) {
  if (isBackDropMenuOpen.value && event.target.innerWidth >= 768) {
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
  <SplashBackdrop v-if="isPageLoading" />
  <div class="h-full relative">
    <main v-if="!isPageLoading" class="h-full relative">
      <!-- Begin header section   -->
      <div
        class="h-[4rem] fixed bg-dark-blue-alpha drop-shadow-xl z-50 custom-box-shadow"
      >
        <NavBar @toggle-backdrop-menu="toggleBackdropMenu"></NavBar>
      </div>
      <!-- End header section  -->

      <div
        id="socialMediaMenu"
        class="invisible md:visible fixed w-20 h-1/4 bg-dark-blue left-0 bottom-0"
      >
        <ul class="flex flex-col items-center justify-center gap-y-5 mt-5">
          <li>
            <a target="_blank" href="https://github.com/julianandreszb">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 640 640"
                class="fill-gray-custom-300 hover:fill-green-cyan hover:-translate-y-0.5 hover:animate-pulse"
              >
                <path
                  d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/jzapatab/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="fill-gray-custom-300 hover:fill-green-cyan hover:-translate-y-0.5 hover:animate-pulse"
              >
                <path
                  d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"
                />
              </svg>
            </a>
          </li>
          <li>
            <div class="w-px bg-gray-custom-300 h-36"></div>
          </li>
        </ul>
      </div>

      <!-- Begin content section  -->
      <div class="h-full grid grid-cols-1 grid-rows-[4rem_auto]">
        <div class="bg-dark-blue"></div>
        <div class="bg-dark-blue">
          <RouterView :class="isBackDropMenuOpen ? 'blur-sm' : ''" />
        </div>
      </div>
      <!-- End content section  -->

      <div
        class="invisible md:visible fixed w-20 h-1/3 bg-dark-blue right-0 bottom-0"
      >
        <ul class="flex flex-col items-center justify-center gap-y-5 mt-5">
          <li class="rotate-90 hover:-translate-y-0.5">
            <a
              class="text-gray-custom-400 hover:text-green-cyan tracking-widest hover:animate-pulse"
              href="mailto:JulianAndresZB@gmail.com"
              >JulianAndresZB@gmail.com</a
            >
          </li>
          <li class="mt-24">
            <div class="w-px bg-gray-custom-300 h-36"></div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<style>
@import "@/assets/base.css";

.custom-box-shadow {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
}
</style>

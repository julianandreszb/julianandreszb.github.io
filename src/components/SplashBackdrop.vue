<script setup>
import IconHexagon from "@/components/icons/IconHexagon.vue";
import constants from "@/assets/constants";
</script>

<template>
  <div class="w-screen h-screen bg-dark-blue flex justify-center items-center">
    <div class="w-2/12 sm:w-1/12">
      <IconHexagon :msg="constants.HEXAGON_ICON_TEXT" />
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import IconHexagon from "@/components/icons/IconHexagon.vue";
import constants from "@/assets/constants";
</script>

<template>
  <header class="flex w-screen items-center p-1 bg-amber-600">
    <nav class="w-screen flex justify-between items-center bg-amber-50">
      <div class="w-2.5">
        <IconHexagon
          :msg="constants.HEXAGON_ICON_TEXT"
          :enable-animation="false"
        />
      </div>
    </nav>
  </header>
</template>

<style scoped></style>

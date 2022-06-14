<script setup>
import IconHexagon from "@/components/icons/IconHexagon.vue";
import constants from "@/assets/constants";
import NavBarItem from "@/components/NavBarItem.vue";
import { useNavStore } from "@/stores/navStore";

const navStore = useNavStore();
</script>

<template>
  <header class="">
    <nav class="w-screen flex justify-between items-center bg-dark-blue">
      <IconHexagon
        class="w-14"
        :msg="constants.HEXAGON_ICON_TEXT"
        :enable-animation="false"
      />
      <div class="w-full h-full flex justify-end gap-0.5 items-center">
        <NavBarItem
          :class="navStore.navBarItemClass"
          data-test="nav-bar-item-about"
          :msg="constants.NAVBAR_ITEM_ABOUT_TEXT"
        />
        <NavBarItem
          :class="navStore.navBarItemClass"
          data-test="nav-bar-item-portfolio"
          :msg="constants.NAVBAR_ITEM_PORTFOLIO_TEXT"
        />
        <NavBarItem
          :class="navStore.navBarItemClass"
          data-test="nav-bar-item-contact"
          :msg="constants.NAVBAR_ITEM_CONTACT_TEXT"
        />
      </div>
    </nav>
  </header>
</template>

<style scoped></style>

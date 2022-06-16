<script setup>
import constants from "@/assets/constants";
import NavBarItem from "@/components/NavBarItem.vue";
import { useNavStore } from "@/stores/navStore";

const navStore = useNavStore();
</script>

<template>
  <header>
    <nav class="h-full w-full flex justify-between items-center bg-dark-blue">
      <div class="w-full h-full flex justify-end items-center">
        <NavBarItem
          class="nav-bar-item border-b-2 border-b-emerald-400 text-emerald-400"
          :class="navStore.navBarItemClass"
          data-test="nav-bar-item-about"
          :msg="constants.NAVBAR_ITEM_ABOUT_TEXT"
        />
        <NavBarItem
          class="nav-bar-item"
          :class="navStore.navBarItemClass"
          data-test="nav-bar-item-portfolio"
          :msg="constants.NAVBAR_ITEM_PORTFOLIO_TEXT"
        />
        <NavBarItem
          class="nav-bar-item"
          :class="navStore.navBarItemClass"
          data-test="nav-bar-item-contact"
          :msg="constants.NAVBAR_ITEM_CONTACT_TEXT"
        />
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav > div {
  counter-reset: item;
}

.nav-bar-item::before {
  counter-increment: item;
  content: "0" counter(item) ". ";
  color: #34d399ff;
}
</style>

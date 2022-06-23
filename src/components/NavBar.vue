<script setup>
import constants from "@/assets/constants";
import NavBarItem from "@/components/NavBarItem.vue";
import IconHexagon from "@/components/icons/IconHexagon.vue";
</script>

<template>
  <header class="flex w-screen h-full justify-between">
    <div class="w-14 flex justify-center">
      <IconHexagon
        class="w-10"
        :msg="constants.HEXAGON_ICON_TEXT"
        :enable-animation="false"
      />
    </div>
    <!-- Begin menu for small screens -->
    <div class="w-14 flex justify-center md:hidden mr-5">
      <ul
        class="w-8 flex flex-col gap-y-2 justify-center items-end cursor-pointer group"
        @click="$emit('toggleBackdropMenu')"
      >
        <li class="w-8 h-0.5 bg-green-cyan group-hover:bg-blue-50"></li>
        <li class="w-6 h-0.5 bg-green-cyan group-hover:bg-blue-50"></li>
        <li class="w-4 h-0.5 bg-green-cyan group-hover:bg-blue-50"></li>
      </ul>
    </div>
    <!-- End menu for small screens -->

    <!-- Begin menu for bigger screens -->
    <div class="hidden md:flex justify-end items-center mr-5">
      <NavBarItem
        class="nav-bar-item h-8 px-4 text-xs font-light tracking-widest text-gray-custom-100 cursor-pointer hover:text-green-cyan"
        data-test="nav-bar-item-about"
        :msg="constants.NAVBAR_ITEM_ABOUT_TEXT"
        href="#aboutMe"
      />
      <NavBarItem
        class="nav-bar-item h-8 px-4 text-xs font-light tracking-widest text-gray-custom-100 cursor-pointer hover:text-green-cyan"
        data-test="nav-bar-item-portfolio"
        :msg="constants.NAVBAR_ITEM_PORTFOLIO_TEXT"
        href="#portfolio"
      />
      <NavBarItem
        class="nav-bar-item h-8 px-4 text-xs font-light tracking-widest text-gray-custom-100 cursor-pointer hover:text-green-cyan"
        data-test="nav-bar-item-contact"
        :msg="constants.NAVBAR_ITEM_CONTACT_TEXT"
        href="#contact"
      />
    </div>
    <!-- End  menu for bigger screens -->
  </header>
</template>

<style scoped>
header {
  counter-reset: item;
}

.nav-bar-item::before {
  counter-increment: item;
  content: "0" counter(item) ". ";
  color: #64ffda;
}
</style>

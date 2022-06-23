<script setup>
import NavBarItem from "@/components/NavBarItem.vue";
import constants from "@/assets/constants";
</script>

<template>
  <div class="h-screen fixed z-10 left-0 right-0">
    <div class="flex">
      <div class="w-6/12 h-screen"></div>
      <div class="w-6/12 h-screen bg-dark-blue-400 drop-shadow-xl">
        <div
          id="navigationRight"
          class="h-full flex flex-col justify-center gap-y-5"
        >
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
      </div>
    </div>
  </div>
</template>

<style scoped>
#navigationRight {
  counter-reset: item;
}

.nav-bar-item::before {
  counter-increment: item;
  content: "0" counter(item) ". ";
  color: #64ffda;
}
</style>

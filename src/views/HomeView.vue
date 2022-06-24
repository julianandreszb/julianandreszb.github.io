<script setup></script>

<template>
  <div class="flex flex-col px-8 py-6 sm:px-16 sm:py-6 md:px-32 md:py-5">
    <!-- Begin about me section -->
    <div class="h-screen">
      <div
        class="flex flex-col gap-y-3 text-3xl sm:text-4xl md:text-5xl tracking-wide"
        data-test="greeting"
      >
        <p
          class="text-sm sm:text-base md:text-lg text-green-cyan tracking-widest"
        >
          Hi, my name is
        </p>
        <p class="text-gray-custom-100 font-bold">Julian Zapata,</p>
        <p class="text-gray-custom-400 font-bold">
          I'm a Full-Stack web developer
        </p>
      </div>
      <div class="mt-2 sm:mt-3" data-test="description">
        <p class="text-xl text-gray-custom-400 leading-relaxed sm:text-2xl">
          I'm passionate about learning and improving every day. Currently, I’m
          focused on getting a master in
          <span class="bg-yellow-300 text-black rounded-md px-1 pt-0.5"
            >JavaScript</span
          >
          and
          <span class="bg-green-400 text-black rounded-md px-1 pt-0.5"
            >VueJS</span
          >.
        </p>
      </div>
      <div data-test="farewell">
        <p class="text-xl text-gray-custom-400 leading-relaxed sm:text-2xl">
          Please check out my
          <span
            class="text-green-cyan border-b-2 border-b-green-cyan cursor-pointer"
            >Portfolio (In progress)</span
          >
          to see what I've built
        </p>
      </div>
    </div>
    <!-- End about me section -->

    <!-- Begin portfolio section -->
    <div id="portfolio" class="h-screen bg-dark-blue pt-28">
      <h1 class="text-3xl text-gray-custom-400">Portfolio</h1>
    </div>
    <!-- End portfolio section -->

    <!-- Begin contact section -->
    <div id="contact" class="h-screen bg-dark-blue pt-28">
      <h1 class="text-3xl text-gray-custom-400">Contact</h1>
    </div>
    <!-- End contact section -->
  </div>
</template>

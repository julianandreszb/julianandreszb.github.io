<script setup></script>

<template>
  <div class="flex flex-col gap-y-5 pl-40 pt-20">
    <div
      class="flex flex-col gap-y-7 text-6xl tracking-wide"
      data-test="greeting"
    >
      <p class="text-lg text-green-cyan tracking-widest">Hi, my name is</p>
      <p class="text-gray-custom-100 font-bold">Julian Zapata,</p>
      <p class="text-gray-custom-400 font-bold">
        I'm a Full-Stack web developer
      </p>
    </div>
    <div data-test="description">
      <p class="text-xl text-gray-custom-400">
        I love coding, learning new web technologies, and improving my skills
        every day.
      </p>
      <p class="text-xl text-gray-custom-400">
        Currently, I’m focused on getting a master in JavaScript and VueJS.
      </p>
    </div>
    <div data-test="farewell">
      <p class="text-xl text-gray-custom-400">
        Please check out my
        <span
          class="text-green-cyan border-b-2 border-b-green-cyan cursor-pointer"
          >Portfolio (In progress)</span
        >
        to see what I've built
      </p>
    </div>
  </div>
</template>

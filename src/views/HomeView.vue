<script setup></script>

<template>
  <div class="flex flex-col gap-y-5 p-32">
    <div class="text-6xl" data-test="greeting">
      <p class="pb-5 text-xl text-emerald-400 tracking-widest">
        Hi, my name is
      </p>
      <p class="pb-5 text-slate-200 font-bold tracking-wide">Julian Zapata,</p>
      <p class="pb-5 text-slate-400 font-bold">
        I'm a Full-Stack web developer
      </p>
    </div>
    <div data-test="description">
      <p class="text-xl text-slate-400">
        I love coding, learning new web technologies, and improving my skills
        every day.
      </p>
      <p class="text-xl text-slate-400">
        Currently, I’m focused on getting a master in JavaScript and VueJS.
      </p>
    </div>
    <div data-test="farewell">
      <p class="text-xl text-slate-400">
        Please check out my
        <span
          class="text-emerald-400 border-b-2 border-b-emerald-400 cursor-pointer"
          >Portfolio (In progress)</span
        >
        to see what I've built
      </p>
    </div>
  </div>
</template>

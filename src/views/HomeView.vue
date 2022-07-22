<script setup>
const experienceStartDateYear = 2012;
const currentYear = new Date().getFullYear();
const totalWebDevelopmentExperience = currentYear - experienceStartDateYear;
</script>

<template>
  <div
    class="flex flex-col px-8 py-6 sm:px-16 sm:py-6 md:px-32 md:py-5 lg:px-52"
  >
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
          <span
            class="text-lg font-bold bg-yellow-300 text-black rounded-md px-1 pt-0.5"
            >JavaScript</span
          >
          and
          <span
            class="text-lg font-bold bg-green-400 text-black rounded-md px-1 pt-0.5"
            >VueJS</span
          >.
        </p>
      </div>
      <div class="mt-10" data-test="farewell">
        <a
          class="text-xl leading-relaxed sm:text-base py-3 px-6 border-solid border border-green-cyan rounded text-green-cyan"
          href="#portfolio"
        >
          Check out my portfolio
        </a>
      </div>
    </div>
    <!-- End about me section -->

    <!-- Begin contact section -->
    <div
      id="aboutMe"
      class="h-screen bg-dark-blue pt-28 flex flex-col lg:flex-row gap-y-10"
    >
      <div class="lg:w-1/2">
        <h1 class="text-2xl font-bold text-gray-custom-100 mb-10">
          <span class="text-green-cyan font-light text-xl">01.</span> About me
        </h1>
        <p class="text-gray-custom-400 mb-5">
          Hi! My name is Julian Zapata and I have been in the world of web
          development for about {{ totalWebDevelopmentExperience }} years. I
          mainly work on the backend side using the PHP frameworks as Zend and
          Laravel(recently). Right now I'm mastering my Javascript, VueJS, and
          CSS skills.
        </p>
        <p class="text-gray-custom-400 mb-5">
          Finally, here are some of the most recent technologies I've used.
        </p>
        <div class="flex gap-x-10">
          <ul class="text-gray-custom-400">
            <li class="ml-5 list-styled">JavaScript (ES6+)</li>
            <li class="ml-5 list-styled">CSS3 & Tailwind CSS</li>
            <li class="ml-5 list-styled">VueJS</li>
          </ul>
          <ul class="text-gray-custom-400">
            <li class="ml-5 list-styled">PHP (Zend 1.7 & Laravel)</li>
            <li class="ml-5 list-styled">MySQL</li>
          </ul>
        </div>
      </div>
      <div class="ml-4 lg:w-1/2 flex justify-center relative gap-x-5">
        <img
          class="border-solid border-2 border-green-cyan rounded h-3/6 bg-dark-blue"
          src="/profile-2.png"
          alt=""
        />
      </div>
    </div>
    <!-- End contact section -->

    <!-- Begin portfolio section -->
    <div id="portfolio" class="h-screen bg-dark-blue pt-28">
      <h1 class="text-2xl font-bold text-gray-custom-100 mb-10">
        <span class="text-green-cyan font-light text-xl">02.</span> Portfolio
      </h1>
      <div class="grid grid-cols-1 gap-4">
        <div
          class="md:hidden custom-box-shadow w-full h-80 drop-shadow-xl relative"
        >
          <div class="rounded bg-project-image-backdrop"></div>
          <div class="rounded bg-project-image bg-[url('/img_1.png')]"></div>
          <div class="flex flex-col gap-y-3 p-10">
            <h3
              class="text-base font-bold text-gray-custom-100 hover:text-green-cyan"
            >
              <a href="">Lorem Ipsum</a>
            </h3>
            <div>
              <p class="text-sm font-light text-gray-custom-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <ul
              class="flex gap-x-2 text-xs font-light text-gray-custom-400 font-bold"
            >
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <ul class="flex gap-x-2 text-xs font-light text-gray-custom-200">
              <li>
                <a target="_blank" href="https://github.com/julianandreszb">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    viewBox="0 0 640 640"
                    class="fill-gray-custom-300 hover:fill-green-cyan hover:animate-pulse"
                  >
                    <path
                      d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="hidden md:block w-full h-80 drop-shadow-xl relative">
          <div class="w-3/5 h-full rounded bg-project-image-backdrop-big"></div>
          <div
            class="w-3/5 h-full rounded bg-project-image-big bg-[url('/img_1.png')]"
          ></div>
          <div class="flex flex-col gap-y-3 pt-3 absolute right-0 w-2/4">
            <h3
              class="text-base font-bold text-gray-custom-100 hover:text-green-cyan self-end"
            >
              <a href="">Lorem Ipsum</a>
            </h3>
            <div class="bg-dark-blue-400 p-5 custom-box-shadow text-right">
              <p class="text-sm font-light text-gray-custom-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <ul
              class="flex justify-end gap-x-2 text-xs font-light text-gray-custom-400 font-bold"
            >
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>

            <ul
              class="flex justify-end gap-x-2 text-xs font-light text-gray-custom-200"
            >
              <li>
                <a target="_blank" href="https://github.com/julianandreszb">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    viewBox="0 0 640 640"
                    class="fill-gray-custom-300 hover:fill-green-cyan hover:animate-pulse"
                  >
                    <path
                      d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End portfolio section -->

    <!-- Begin contact section -->
    <div
      id="contact"
      class="h-screen bg-dark-blue pt-28 flex flex-col items-center"
    >
      <h1 class="text-2xl font-bold text-gray-custom-100 mb-5">
        <span class="text-green-cyan font-light text-xl">03.</span> Contact
      </h1>
      <p class="text-gray-custom-400 mb-5">
        Please feel free to send me an email I'll try to reply to you as soon as
        possible
      </p>
      <a
        class="text-xl leading-relaxed sm:text-base py-3 px-6 border-solid border border-green-cyan rounded text-green-cyan hover:animate-pulse"
        href="mailto:JulianAndresZB@gmail.com"
        >Mail me!</a
      >
    </div>
    <!-- End contact section -->

    <div
      id="contact"
      class="h-screen bg-dark-blue pt-28 flex flex-col items-center"
    >
      <h1 class="text-2xl font-bold text-gray-custom-100 mb-5">Credits</h1>
      <p class="text-gray-custom-400 text-center">
        This site was fully based on
        <a
          class="text-green-cyan"
          target="_blank"
          href="https://brittanychiang.com/"
          >Brittany Chiang</a
        >
        page design.<br />
        All credits to her &#x2764;. <br /><br />Please visit her
        <a
          class="text-green-cyan"
          target="_blank"
          href="https://github.com/bchiang7"
          >GitHub</a
        >
        profile too.
      </p>
    </div>
  </div>
</template>

<style scoped>
.bg-project-image {
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100%;
  height: 20em;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
  z-index: -2;
}
.bg-project-image-big {
  cursor: pointer;
  background-position: center;
  /*background-repeat: no-repeat;*/
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  z-index: -2;
}

.bg-project-image-backdrop {
  background-color: #012a1d;
  width: 100%;
  height: 20rem;
  position: absolute;
  z-index: -1;
  opacity: 0.3;
}

.bg-project-image-backdrop-big {
  cursor: pointer;
  background-color: #0affb1;
  background-repeat: no-repeat;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  opacity: 0.2;
}

.bg-project-image-backdrop-big:hover {
  opacity: 0;
}

.custom-box-shadow {
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
}

.custom-box-shadow:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0 10px 20px;
}

.list-styled:before {
  content: "";
  border-color: transparent #64ffda;
  border-style: solid;
  border-width: 0.25em 0 0.25em 0.35em;
  display: block;
  height: 0;
  width: 0;
  left: -1em;
  top: 0.9em;
  position: relative;
}
</style>

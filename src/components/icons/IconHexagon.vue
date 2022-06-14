<script setup>
import { onMounted } from "vue";
import anime from "animejs";

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
  enableAnimation: {
    type: Boolean,
    default: true,
  },
});

onMounted(() => {
  if (props.enableAnimation) {
    anime
      .timeline({
        loop: true,
        direction: "alternate",
      })
      .add({
        targets: "#hexagon path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutQuart",
        duration: 2000,
        delay: function (el, i) {
          return i * 250;
        },
      })
      .add({
        targets: "#hexagon #B",
        duration: 1000,
        opacity: 1,
        easing: "easeInOutQuart",
      });
  } else {
    anime({
      targets: "#hexagon #B",
      duration: 1000,
      opacity: 1,
      easing: "easeInOutQuart",
    });
  }
});
</script>

<template>
  <svg
    width="100%"
    id="hexagon"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <g
        id="B"
        transform="translate(36, 33)"
        fill="#64FFDA"
        style="opacity: 0"
        font-size="50"
        font-weight="400"
        letter-spacing="4.16666603"
      >
        <text>
          <tspan x="-18" y="33">
            {{ msg }}
          </tspan>
        </text>
      </g>
      <path
        stroke="#64FFDA"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M 50, 5
         L 11, 27
         L 11, 72
         L 50, 95
         L 89, 73
         L 89, 28 z"
      />
    </g>
  </svg>
</template>

<style scoped></style>

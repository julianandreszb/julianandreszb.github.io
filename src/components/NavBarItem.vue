<script setup>
defineProps({
  msg: {
    required: true,
  },
});
</script>

<template>
  <a>{{ msg }}</a>
</template>

<style scoped></style>

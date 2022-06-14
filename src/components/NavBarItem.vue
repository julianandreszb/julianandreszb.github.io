<script setup>
defineProps({
  msg: {
    required: true,
  },
});
</script>

<template>
  <div>{{ msg }}</div>
</template>

<style scoped></style>

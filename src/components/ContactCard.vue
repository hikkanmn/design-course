<script setup></script>

<template>
  <div class="flex gap-6 items-center">
    <!-- Цветная линия -->
    <div :class="`border-t-4 border-x-4 rounded-t-full h-32 w-8 ${lineColor}`"></div>
    <div class="flex flex-col">
      <!-- Имя -->
      <p class="text-white font-semibold">{{ name }}</p>
      <!-- Email -->
      <p class="text-white">{{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    lineColor: {
      type: String,
      default: 'border-customPurple'
    }
  }
}
</script>

<style scoped>
/* Можно добавить свои стили, если необходимо */
</style>

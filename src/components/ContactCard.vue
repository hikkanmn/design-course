<script setup></script>

<template>
  <div class="flex gap-6 items-top">
    <!-- Цветная линия -->
    <div :class="`border-t-4 border-x-4 rounded-t-full h-32 w-8 ${lineColor}`"></div>
    <div class="flex flex-col">
      <!-- Имя -->
      <p class="text-white font-myUnbounded font-medium text-[15px]">{{ name }}</p>
      <!-- Email -->
      <p class="text-white text-opacity-50 font-myUnbounded font-light text-[15px]">{{ email }}</p>
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

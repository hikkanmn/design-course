<script setup></script>

<template>
  <div class="flex gap-6 items-top">
    <!-- Цветная линия -->
    <div
      :class="`md:w-2 border-t-4 border-x-4 rounded-t-full h-32 w-8 xs:w-24 sm:w-32 sm:h-8 sm:rounded-r-full sm:border-y-4 sm:border-r-4 sm:border-l-0 sm:rounded-tl-none ${lineColor}`"
    ></div>
    <div class="flex flex-col">
      <!-- Имя -->
      <p class="text-white font-myUnbounded font-medium text-[15px] lg:text-[12px] xs:text-[10px]">
        {{ name }}
      </p>
      <!-- Email -->
      <p
        class="text-white text-opacity-50 font-myUnbounded font-light text-[15px] lg:text-[12px] xs:text-[10px]"
      >
        {{ email }}
      </p>
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

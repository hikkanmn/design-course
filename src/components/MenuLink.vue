<template>
  <!-- router-link оборачивает кнопку, путь задается через пропс to -->
  <router-link
    :to="to"
    :class="`${bgColor} font-myUnbounded font-light lg:text-[12px] text-[17px] px-4 py-2 rounded-full cursor-pointer text-center`"
  >
    {{ text }}
  </router-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      required: true
    },
    to: {
      // Новый пропс для пути
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>

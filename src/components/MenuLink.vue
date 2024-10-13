<template>
  <a
    :class="`${bgColor} font-myUnbounded font-light text-[17px] px-4 py-2 rounded-full cursor-pointer`"
    href="#"
  >
    {{ text }}
  </a>
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
    }
  }
}
</script>

<style scoped></style>

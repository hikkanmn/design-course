<template>
  <button
    title="вернуться к началу страницы"
    v-show="showButton"
    @click="scrollToTop"
    class="group z-10 w-fit aspect-square fixed bottom-10 right-5 bg-customPurple border-none rounded-full pl-2 pr-1 cursor-pointer flex items-center justify-center hover:bg-customLime"
  >
    <!-- Иконка или текст кнопки -->
    <svg
      width="36"
      height="28"
      viewBox="0 0 28 28"
      class="fill-white group-hover:fill-customBlack duration-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.9384 0.93934C11.5242 0.353553 12.4739 0.353553 13.0597 0.93934L22.6057 10.4853C23.1915 11.0711 23.1915 12.0208 22.6057 12.6066C22.0199 13.1924 21.0701 13.1924 20.4843 12.6066L13.4991 5.62132V26C13.4991 26.8284 12.8275 27.5 11.9991 27.5C11.1706 27.5 10.4991 26.8284 10.4991 26V5.62132L3.51379 12.6066C2.928 13.1924 1.97825 13.1924 1.39247 12.6066C0.806678 12.0208 0.806678 11.0711 1.39247 10.4853L10.9384 0.93934Z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      showButton: false,
      icon: {
        url: '/src/img/arrowTop.svg'
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // Определяем порог прокрутки, при котором кнопка будет видна
      this.showButton = window.scrollY > 200
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавно прокручиваем к верху
      })
    }
  }
}
</script>

<style scoped></style>

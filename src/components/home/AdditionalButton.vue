<template>
  <div
    class="col-start-8 col-end-13 row-start-11 row-span-1 sm:col-start-1 flex justify-center items-center h-fit mb-4"
  >
    <router-link title="переход к разделу Ресурсы" to="/resources" @click="scrollToTop">
      <button
        class="lowercase font-myUnbounded font-regular lg:text-[18px] sm:text-[22px] text-[22px] hover:scale-110 bg-customOrange text-white px-8 py-3 rounded-full shadow-lg hover:bg-customLime hover:text-customBlack flex items-center"
      >
        дополнительные материалы
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AdditionalButton',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавно прокручиваем к верху
      })
    }
  }
}
</script>

<template>
  <router-link
    title="переход к разделу Копмозиция"
    class="col-start-1 col-end-7 row-start-1 row-span-1 flex items-end justify-start"
    to="/composition"
    @click="scrollToTop"
    ><h2
      class="text-white font-myMedium lg:text-[30px] md:text-[26px] xs:text-[22px] text-[35px] uppercase cursor-pointer lg:hover:text-[32px] hover:text-[37px] hover:text-customPurple"
    >
      Композиция
    </h2></router-link
  >
  <router-link
    title="переход к разделу Копмозиция"
    class="col-start-1 col-end-7 row-start-2 row-span-3 sm:col-end-13 sm:row-end-3 w-full bg-customPurple rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] flex justify-center items-center lg:flex-col sm:flex-row gap-10 p-20 xl:p-16 lg:p-10 md:p-14 sm:p-10 xs:p-6 hover:bg-opacity-10 border-customPurple border-4 duration-1000"
    to="/composition"
    @click="scrollToTop"
  >
    <div
      class="w-1/6 xl:w-1/5 lg:w-1/3 sm:w-[100px] xs:w-[60px] aspect-square lg:self-start sm:self-center bg-white hover:opacity-50 hover:scale-110"
    ></div>
    <div
      class="w-1/6 xl:w-1/5 lg:w-1/3 sm:w-[100px] xs:w-[60px] aspect-square bg-white sm:self-center hover:opacity-50 rounded-full hover:scale-110"
    ></div>
    <img
      class="w-1/6 xl:w-1/4 lg:w-1/3 sm:w-[100px] xs:w-[60px] aspect-square lg:self-end sm:self-center hover:scale-[1.15] hover:opacity-50"
      src="/src/img/triangle.svg"
      alt="Ошибка прогрузки изображения! Перезагрузите страницу"
    />
  </router-link>
  <div
    class="sm:hidden col-start-1 col-end-6 row-start-5 row-span-1 sm:row-start-4 lg:h-1/2 sm:h-1/3 lg:w-fit border-customPurple border-4 rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] flex justify-start items-center px-14"
  >
    <p
      class="lowercase font-myUnbounded font-medium lg:text-[18px] sm:text-[22px] text-[22px] text-white"
    >
      квиз <span class="lg:hidden"> на эту тему</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CompositionBlock',
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

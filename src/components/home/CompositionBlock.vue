<template>
  <router-link
    class="col-start-1 col-end-7 row-start-1 row-span-1 flex items-end justify-start"
    to="/composition"
    @click="scrollToTop"
    ><h2 class="text-white font-myMedium text-[35px] uppercase cursor-pointer hover:text-[37px] hover:text-customPurple transition-all transform duration-500 ease-in-out">
      Композиция
    </h2></router-link
  >
  <div
    class="col-start-1 col-end-7 row-start-2 row-span-3 w-full bg-customPurple rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] flex justify-center items-center gap-10 p-4 hover:bg-opacity-10 border-customPurple border-4 transition-all transform duration-1000 ease-in-out"
  >
    <div
      class="w-[110px] h-[110px] bg-white hover:opacity-50 hover:scale-110 transition-all transform duration-500 ease-in-out"
    ></div>
    <div
      class="w-[110px] h-[110px] bg-white hover:opacity-50 rounded-[60px] hover:scale-110 transition-all transform duration-500 ease-in-out"
    ></div>
    <img
      class="w-[115px] h-[115px] hover:scale-[1.15] hover:opacity-50 transition-all transform duration-500 ease-in-out"
      src="/src/img/triangle.svg"
      alt="Ошибка прогрузки изображения! Перезагрузите страницу"
    />
  </div>
  <div
    class="col-start-1 col-end-6 row-start-5 row-span-1 border-customPurple border-4 rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] flex justify-start items-center px-14"
  >
    <p class="lowercase font-myUnbounded font-medium text-[22px] text-white">квиз на эту тему</p>
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

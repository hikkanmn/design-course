<template>
  <router-link
    title="переход к разделу Колористика"
    class="col-start-8 col-end-13 row-start-4 row-span-1 flex items-end justify-end"
    to="/color"
    @click="scrollToTop"
  >
    <h2
      class="text-white font-myMedium text-[35px] uppercase cursor-pointer hover:text-[37px] hover:text-customLime"
    >
      Колористика
    </h2>
  </router-link>

  <div
    class="group col-start-8 col-end-13 row-start-5 row-span-3 w-full bg-customLime rounded-br-[60px] rounded-bl-[60px] rounded-tl-[60px] flex flex-col justify-center items-center p-4 hover:bg-opacity-10 border-customLime border-4 duration-1000"
  >
    <div class="flex gap-x-[40px]">
      <div
        class="w-[110px] h-[110px] bg-customBlack rounded-[60px] hover:scale-[0.8] border-4 border-opacity-0 border-white hover:border-opacity-100 group-hover:bg-white"
      ></div>
      <div class="w-[110px] h-[110px] bg-customPurple rounded-[60px] hover:scale-[0.8]"></div>
      <div class="w-[110px] h-[110px] bg-customOrange rounded-[60px] hover:scale-[0.8]"></div>
    </div>
  </div>
  <div
    class="col-start-9 col-end-13 row-start-8 row-span-1 text-white border-customLime border-4 rounded-br-[60px] rounded-bl-[60px] rounded-tl-[60px] flex justify-end items-center px-14"
  >
    <p class="lowercase font-myUnbounded font-medium text-[22px] text-white">квиз на эту тему</p>
  </div>
</template>

<script>
export default {
  name: 'ColoristBlock',
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

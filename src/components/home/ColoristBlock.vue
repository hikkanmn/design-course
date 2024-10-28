<template>
  <router-link
    title="переход к разделу Колористика"
    class="col-start-8 col-end-13 row-start-4 row-span-1 flex items-end justify-end"
    to="/color"
    @click="scrollToTop"
  >
    <h2
      class="text-white font-myMedium lg:text-[30px] md:text-[26px] sm:text-[30px] text-[35px] uppercase cursor-pointer lg:hover:text-[32px] hover:text-[37px] hover:text-customLime"
    >
      Колористика
    </h2>
  </router-link>

  <div
    class="group flex gap-x-10 lg:gap-x-0 col-start-8 col-end-13 row-start-5 row-span-3 xs:col-start-1 sm:col-start-4 sm:row-span-2 w-full bg-customLime rounded-br-[60px] rounded-bl-[60px] rounded-tl-[60px] justify-center items-center p-20 xl:p-16 lg:p-10 md:p-14 sm:p-10 hover:bg-opacity-10 border-customLime border-4 duration-1000"
  >
    <!-- <div class="flex gap-x-10"> -->
    <div
      class="w-1/6 xl:w-1/5 lg:w-1/3 aspect-square lg:self-start bg-customBlack rounded-full hover:scale-[0.8] border-4 border-opacity-0 border-white hover:border-opacity-100 group-hover:bg-white"
    ></div>
    <div
      class="w-1/6 xl:w-1/5 lg:w-1/3 aspect-square bg-customPurple rounded-full hover:scale-[0.8]"
    ></div>
    <div
      class="w-1/6 xl:w-1/5 lg:w-1/3 aspect-square lg:self-end bg-customOrange rounded-full hover:scale-[0.8]"
    ></div>
    <!-- </div> -->
  </div>
  <div
    class="col-start-9 col-end-13 row-start-8 row-span-1 sm:row-start-7 justify-self-end lg:h-1/2 sm:h-1/3 lg:w-fit text-white border-customLime border-4 rounded-br-[60px] rounded-bl-[60px] rounded-tl-[60px] flex justify-end items-center px-14"
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

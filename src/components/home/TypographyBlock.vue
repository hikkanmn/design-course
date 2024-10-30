<template>
  <router-link
    title="переход к разделу Типографика"
    class="col-start-1 col-end-7 row-start-7 row-span-1 flex items-end justify-start"
    to="/typography"
    @click="scrollToTop"
    ><h2
      class="text-white font-myMedium lg:text-[30px] md:text-[26px] text-[35px] uppercase cursor-pointer lg:hover:text-[32px] hover:text-[37px] hover:text-customPurple"
    >
      Типографика
    </h2></router-link
  >
  <div
    class="col-start-1 col-end-7 row-start-8 row-span-3 sm:col-end-10 sm:row-span-2 xs:col-end-13 w-full bg-customPurple rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] flex justify-center items-center text-center px-20 py-10 hover:bg-opacity-10 border-customPurple border-4 duration-1000 text-white text-[11rem] font-mySoyuzGrotesk font-bold lowercase xl:text-[10rem] lg:text-[8rem]"
  >
    <p class="flex justify-center items-center gap-x-20 lg:flex-col w-full">
      <span
        class="hover:font-myUnbounded hover:opacity-50 hover:text-[80px] duration-1000 lg:self-start m-[-2rem]"
        >а</span
      ><span
        class="hover:font-myUnbounded hover:opacity-50 hover:text-[90px] duration-1000 lg:self-end m-[-2rem]"
        >б</span
      ><span
        class="hover:font-myUnbounded hover:opacity-50 hover:text-[90px] duration-1000 lg:self-start m-[-2rem]"
        >в</span
      ><span
        class="hover:font-myMedium hover:opacity-50 hover:text-[80px] duration-1000 lg:self-end m-[-2rem]"
        >г</span
      >
    </p>
  </div>
  <div
    class="col-start-1 col-end-6 row-start-11 row-span-1 sm:row-start-10 lg:h-1/2 sm:h-1/3 lg:w-fit border-customPurple border-4 rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] flex justify-start items-center px-14 md:px-10"
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
  name: 'TypographyBlock',
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

<template>
  <router-link
    title="переход к разделу Типографика"
    class="col-start-1 col-end-7 row-start-7 row-span-1 flex items-end justify-start"
    to="/typography"
    @click="scrollToTop"
    ><h2
      class="text-white font-myMedium text-[35px] uppercase cursor-pointer hover:text-[37px] hover:text-customPurple"
    >
      Типографика
    </h2></router-link
  >
  <div
    class="col-start-1 col-end-7 row-start-8 row-span-3 w-full h-full bg-customPurple rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] flex justify-center items-center text-center px-4 hover:bg-opacity-10 border-customPurple border-4 duration-1000"
  >
    <p class="text-white text-[160px] font-mySoyuzGrotesk font-bold lowercase">
      <span class="hover:font-myUnbounded hover:opacity-50 hover:text-[80px] duration-1000">а</span
      ><span class="hover:font-myMedium hover:opacity-50 hover:text-[90px] duration-1000">б</span
      ><span class="hover:font-myUnbounded hover:opacity-50 hover:text-[90px] duration-1000">в</span
      ><span class="hover:font-myMedium hover:opacity-50 hover:text-[80px] duration-1000">г</span>
    </p>
  </div>
  <div
    class="col-start-1 col-end-6 row-start-11 row-span-1 border-customPurple border-4 rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] flex justify-start items-center px-14"
  >
    <p class="lowercase font-myUnbounded font-medium text-[22px] text-white">квиз на эту тему</p>
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

<template>
  <!-- <div class="col-start-8 col-end-13 row-start-3 row-span-3 text-end"> -->
  <h2
    class="col-start-8 col-end-13 row-start-4 row-span-1 flex items-end justify-end text-white font-myMedium text-[35px] uppercase mb-4"
  >
    Колористика
  </h2>
  <div
    class="col-start-8 col-end-13 row-start-5 row-span-3 w-full h-full bg-customLime rounded-br-[60px] rounded-bl-[60px] rounded-tl-[60px] flex flex-col justify-center items-center p-4"
  >
    <div class="flex gap-x-[40px]">
      <div class="w-[110px] h-[110px] bg-customBlack rounded-full"></div>
      <div class="w-[110px] h-[110px] bg-customPurple rounded-full"></div>
      <div class="w-[110px] h-[110px] bg-customOrange rounded-full"></div>
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
  name: 'ColoristBlock'
}
</script>

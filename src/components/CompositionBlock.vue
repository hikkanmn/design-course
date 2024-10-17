<template>
  <h2
    class="col-start-1 col-end-7 row-start-1 row-span-1 flex items-end justify-start text-white font-myMedium text-[35px] uppercase"
  >
    Композиция
  </h2>
  <div
    class="col-start-1 col-end-7 row-start-2 row-span-3 w-full h-full bg-customPurple rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] flex justify-center items-center gap-10 p-4"
  >
    <div class="w-[110px] h-[110px] bg-white"></div>
    <div class="w-[110px] h-[110px] bg-white rounded-full"></div>
    <img
      class="w-[115px] h-[115px]"
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
  name: 'CompositionBlock'
}
</script>

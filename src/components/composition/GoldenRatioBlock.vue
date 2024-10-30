<script setup></script>

<template>
  <!-- Текст "начинается с основ" -->
  <div
    class="pr-16 xs:pr-8 py-2 bg-customPurple hover:bg-opacity-50 hover:border-r-4 hover:border-white rounded-r-full pl-[135px] lg:pl-[100px] md:pl-[50px] sm:pl-[20px] mr-[135px] lg:mr-[100px] md:mr-[50px] sm:mr-[20px] mt-28 lg:mt-10 mb-10 text-white flex justify-between items-center"
  >
    <p class="text-[65px] lg:text-[35px] md:text-[30px] sm:text-[24px] xs:text-[18px] font-myMedium">
      золотое сечение
    </p>
    <span
      class="font-myUnbounded font-medium text-[65px] lg:text-[35px] md:text-[30px] sm:text-[24px]"
      >5</span
    >
  </div>
  <!--  bg-myGoldenRatio bg-no-repeat bg-contain -->
  <div
    class="grid grid-cols-12 grid-rows-6 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px]"
  >
    <div
      class="col-start-1 col-end-8 row-start-1 row-end-7 flex flex-col justify-between gap-20 pr-4"
    >
      <p
        class="text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]"
      >
        <span class="text-customLime">Золотое сечение в дизайне </span> — это принцип гармонии и
        баланса, основанный на математическом соотношении примерно 1,618.
      </p>
      <div
        class="text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px] flex flex-col justify-center"
      >
        <h3 class="text-customLime mb-6">Применение золотого сечения:</h3>
        <p>• Размещение элементов на странице.</p>
        <p>• Создание пропорций между размерами элементов.</p>
        <p>• Определение идеального соотношения между высотой и шириной дизайна.</p>
      </div>
      <div
        class="text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px] flex flex-col justify-center"
      >
        <h3 class="text-customLime mb-6">Преимущества использования золотого сечения:</h3>
        <p>• Создает более гармоничный и приятный для восприятия дизайн.</p>
        <p>• Делает дизайн более уравновешенным и стабильным.</p>
        <p>• Повышает эстетическую привлекательность дизайна.</p>
      </div>
    </div>
    <p
      class="col-start-8 col-end-13 row-start-1 row-end-3 text-customPurple font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]"
    >
      При помощи золотого сечения можно управлять вниманием зрителя, что очень важно при изучении
      дизайна
    </p>

    <p
      class="col-start-8 col-end-12 row-start-3 row-end-4 text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]"
    >
      <span class="text-customOrange">Золотое сечение </span> — это система пропорций, а не просто
      <span class="text-customOrange"> «спираль»</span>
    </p>
    <div
      class="bg-myGoldenRatio hover:scale-90 bg-no-repeat col-start-8 col-end-13 row-start-4 row-end-7 bg-contain"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'GoldenRatioBlock'
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>

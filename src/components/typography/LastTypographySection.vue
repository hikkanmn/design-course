<script setup></script>

<template>
  <div
    class="mr-[135px] lg:mr-[100px] md:mr-[50px] sm:mr-[20px] bg-customLime rounded-r-[100px] h-[40px]"
  ></div>
  <div class="relative overflow-hidden w-full mt-16">
    <div class="flex justify-start whitespace-nowrap animate-scroll_reverse">
      <span
        class="self-center font-myUnbounded font-medium uppercase text-customPurple text-[32px] md:text-[25px] sm:text-[15px]"
        v-for="n in 50"
        :key="n"
      >
        разныеразныеразныеразныеразныеразныеразныеразныеразныеразныеразные
      </span>
    </div>
  </div>
  <div class="relative overflow-hidden w-full">
    <div class="flex justify-start whitespace-nowrap animate-scroll">
      <span class="self-center font-myMedium text-white text-[83px] md:text-[60px] sm:text-[30px] mb-20" v-for="n in 50" :key="n">
        ШРИФТЫШРИФТЫШРИФТЫШРИФТЫШРИФТЫШРИФТЫШРИФТЫ
      </span>
    </div>
  </div>

  <div class="ml-[135px] lg:ml-[100px] md:ml-[50px] sm:ml-[20px] h-[5px] bg-customLime mb-20"></div>
  <div
    class="container flex gap-10 pl-[135px] lg:pl-[100px] md:pl-[50px] sm:pl-[20px] pr-[280px] lg:pr-[200px] sm:pr-[80px] xs:pr-[40px] mb-20"
  >
    <p
      class="text-white text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] font-myUnbounded font-light"
    >
      — это не просто буквы, а мощный инструмент, который может изменить восприятие дизайна.
      Помните, что правильный выбор шрифта, его размер, стиль и расстановка могут сделать ваш дизайн
      более привлекательным и запоминающимся.
    </p>
    <img
      class="hover:scale-125"
      src="/src/img/decoration_star_lime.svg"
      alt="Ошибка загрузки изображения! Попробуйте перезагрузить страницу"
    />
  </div>
  <div class="h-[5px] bg-white mr-[135px] lg:mr-[100px] md:mr-[50px] sm:mr-[20px] mb-20"></div>
</template>

<script>
export default {
  name: 'LastTypographySection'
}
</script>

<style scoped></style>

<script setup></script>

<template>
  <div class="mr-[135px] bg-customLime rounded-r-[100px] h-[40px]"></div>
  <div class="relative overflow-hidden w-full mt-16">
    <div class="flex justify-start whitespace-nowrap animate-scroll_reverse">
      <span
        class="self-center font-myUnbounded font-medium uppercase text-customPurple text-[32px]"
        v-for="n in 50"
        :key="n"
      >
        разныеразныеразныеразныеразныеразныеразныеразныеразныеразныеразные
      </span>
    </div>
  </div>
  <div class="relative overflow-hidden w-full">
    <div class="flex justify-start whitespace-nowrap animate-scroll">
      <span class="self-center font-myMedium text-white text-[83px] mb-20" v-for="n in 50" :key="n">
        ШРИФТЫШРИФТЫШРИФТЫШРИФТЫШРИФТЫШРИФТЫШРИФТЫ
      </span>
    </div>
  </div>

  <div class="ml-[135px] h-[5px] bg-customLime mb-20"></div>
  <div class="container flex gap-10 pl-[135px] pr-[280px] mb-20">
    <p class="text-white text-[22px] font-myUnbounded font-light">
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
  <div class="h-[5px] bg-white mr-[135px] mb-20"></div>
</template>

<script>
export default {
  name: 'LastTypographySection'
}
</script>

<style scoped></style>

<script setup>
import RhythmExample from '/src/components/composition/RhythmExample.vue'
</script>

<template>
  <div
    class="pr-16 xs:pr-8 py-2 bg-customPurple hover:bg-opacity-50 hover:border-r-4 hover:border-white rounded-r-full pl-[135px] lg:pl-[100px] md:pl-[50px] sm:pl-[20px] mr-[135px] lg:mr-[100px] md:mr-[50px] sm:mr-[20px] mt-28 lg:mt-10 mb-10 text-white flex justify-between items-center"
  >
    <p class="text-[65px] lg:text-[35px] md:text-[30px] sm:text-[24px] xs:text-[18px]  font-myMedium">ритм</p>
    <span
      class="font-myUnbounded font-medium text-[65px] lg:text-[35px] md:text-[30px] sm:text-[24px]"
      >3</span
    >
  </div>
  <div class="px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px]">
    <p
      class="text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]  lg:mb-10"
    >
      <span class="text-customLime">Ритм в дизайне </span>— это повторение и вариация элементов,
      которые создают динамику и движение в композиции.
    </p>
  </div>
  <RhythmExample
    main_text="Повторение:"
    text_about="использование одинаковых элементов с определенным интервалом"
  >
    <img
      class="filter grayscale-0 hover:grayscale"
      src="/src/img/rhythm_1_example.svg"
      alt="Ошибка загрузки изображения! Перезагрузите страницу"
    />
  </RhythmExample>
  <RhythmExample
    main_text="Вариация:"
    text_about="изменение размера, цвета, формы повторяющихся элементов"
  >
    <img
      class="filter grayscale-0 hover:grayscale"
      src="/src/img/rhythm_2_example.svg"
      alt="Ошибка загрузки изображения! Перезагрузите страницу"
    />
  </RhythmExample>
  <RhythmExample
    main_text="Прогрессия:"
    text_about="постепенное изменение размера, цвета, формы или ориентации повторяющихся элементов"
  >
    <img
      class="filter grayscale-0 hover:grayscale"
      src="/src/img/rhythm_3_example.svg"
      alt="Ошибка загрузки изображения! Перезагрузите страницу"
    />
  </RhythmExample>
  <div
    class="px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]  flex flex-col my-20 md:mt-14 sm:mt-10 xs:mt-0 text-white"
  >
    <h3 class="text-customLime mb-6">Баланс в дизайне важен, потому что:</h3>
    <p>• Делает дизайн более привлекательным и приятным для восприятия.</p>
    <p>• Создает чувство порядка и уверенности в информации.</p>
    <p>• Улучшает читаемость и восприятие контента.</p>
    <p>• Помогает выделить ключевые элементы дизайна.</p>
  </div>
</template>

<script>
export default {
  name: 'RhythmBlock'
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>

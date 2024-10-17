<script setup>
import RhythmExample from '/src/components/composition/RhythmExample.vue'
</script>

<template>
  <!-- Текст "начинается с основ" -->
  <div
    class="pr-16 py-2 bg-customPurple rounded-r-full pl-[135px] mr-[135px] my-20 text-white flex justify-between items-center"
  >
    <p class="text-[65px] font-myMedium">ритм</p>
    <span class="font-myUnbounded font-medium text-[65px]">3</span>
  </div>
  <div class="px-[135px]">
    <p class="text-white font-myUnbounded font-light text-[22px]">
      <span class="text-customLime">Ритм в дизайне </span>— это повторение и вариация элементов,
      которые создают динамику и движение в композиции.
    </p>
  </div>
  <RhythmExample
    main_text="Повторение:"
    text_about="использование одинаковых элементов с определенным интервалом"
    img_link="@/src/img/rhythm_1_example.svg"
  />
  <RhythmExample
    main_text="Вариация:"
    text_about="изменение размера, цвета, формы повторяющихся элементов"
    img_link="@/src/img/rhythm_2_example.svg"
  />
  <RhythmExample
    main_text="Прогрессия:"
    text_about="постепенное изменение размера, цвета, формы или ориентации повторяющихся элементов"
    img_link="@/src/img/rhythm_3_example.svg"
  />
  <div class="px-[135px] font-myUnbounded font-light text-[22px] flex flex-col my-20 text-white">
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

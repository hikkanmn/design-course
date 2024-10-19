<script setup>
import QuizBlock from '/src/components/QuizBlock.vue'
</script>

<template>
  <!-- Текст "начинается с основ" -->
  <div class="mb-28">
    <div class="flex justify-start">
      <div
        class="pr-10 w-fit py-2 bg-customPurple rounded-r-full pl-[135px] mr-10 my-20 text-white flex items-center"
      >
        <p class="text-[43px] font-myMedium">квиз</p>
      </div>
      <p class="mr-[135px] my-20 text-white flex items-center text-[43px] font-myMedium">
        на тему —&ensp;<span class="text-customPurple"> композиция</span>
      </p>
    </div>

    <div class="flex items-center mb-20 mx-[135px]">
      <p class="text-white font-myUnbounded font-light text-[22px] flex align-center">
        Готовы проверить, как хорошо вы освоили принципы композиции? Этот квиз станет замечательным
        тестом на знания о балансе, контрасте и ритме. Пройдите квиз и убедитесь, что вы готовы
        создавать гармоничные и уравновешенные композиции в своих проектах!
      </p>
    </div>

    <QuizBlock number="1" question="Какой из этих вариантов композиции демонстрирует ассиметрию?">
      <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
        <div
          class="w-[310px] h-[310px] flex items-center justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <img
            class="hover:scale-110 transition-all transform duration-700 ease-in-out"
            src="/src/img/quiz/composition/1_1.svg"
            alt="Ошибка загрузки изображения! Перезагрузите страницу"
          />
        </div>
        <div
          class="w-[310px] h-[310px] flex items-center justify-center border-4 border-white rounded-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <img
            class="hover:scale-110 transition-all transform duration-700 ease-in-out"
            src="/src/img/quiz/composition/1_2.svg"
            alt="Ошибка загрузки изображения! Перезагрузите страницу"
          />
        </div>
        <div
          class="w-[310px] h-[310px] flex items-center justify-center border-4 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <img
            class="hover:scale-110 transition-all transform duration-700 ease-in-out"
            src="/src/img/quiz/composition/1_3.svg"
            alt="Ошибка загрузки изображения! Перезагрузите страницу"
          />
        </div>
      </div>
    </QuizBlock>
    <QuizBlock number="2" question="На какой композиции внимание зрителя сосредоточено по центру?">
      <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
        <div
          class="w-[310px] h-[310px] flex items-center justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <img
            class="hover:scale-110 transition-all transform duration-700 ease-in-out"
            src="/src/img/quiz/composition/2_1.svg"
            alt="Ошибка загрузки изображения! Перезагрузите страницу"
          />
        </div>
        <div
          class="w-[310px] h-[310px] flex items-center justify-center border-4 border-white rounded-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <img
            class="hover:scale-110 transition-all transform duration-700 ease-in-out"
            src="/src/img/quiz/composition/2_2.svg"
            alt="Ошибка загрузки изображения! Перезагрузите страницу"
          />
        </div>
        <div
          class="w-[310px] h-[310px] flex items-center justify-center border-4 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <img
            class="hover:scale-110 transition-all transform duration-700 ease-in-out"
            src="/src/img/quiz/composition/2_3.svg"
            alt="Ошибка загрузки изображения! Перезагрузите страницу"
          />
        </div>
      </div>
    </QuizBlock>
    <QuizBlock number="3" question="Какой из этих вариантов композиции демонстрирует ритм?">
      <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
        <div
          class="w-[310px] h-[310px] flex items-center justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <img
            class="hover:scale-110 transition-all transform duration-700 ease-in-out"
            src="/src/img/quiz/composition/3_1.svg"
            alt="Ошибка загрузки изображения! Перезагрузите страницу"
          />
        </div>
        <div
          class="w-[310px] h-[310px] flex items-center justify-center border-4 border-white rounded-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <img
            class="hover:scale-110 transition-all transform duration-700 ease-in-out"
            src="/src/img/quiz/composition/3_2.svg"
            alt="Ошибка загрузки изображения! Перезагрузите страницу"
          />
        </div>
        <div
          class="w-[310px] h-[310px] flex items-center justify-center border-4 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <img
            class="hover:scale-110 transition-all transform duration-700 ease-in-out"
            src="/src/img/quiz/composition/3_3.svg"
            alt="Ошибка загрузки изображения! Перезагрузите страницу"
          />
        </div>
      </div>
    </QuizBlock>
  </div>
</template>

<script>
export default {
  name: 'QuizComposition'
  //   data() {
  //     return {
  //       isHoveredl: false, // Режим наведения (по умолчанию выключен)
  //       isHoveredc: false, // Режим наведения (по умолчанию выключен)
  //       isHoveredr: false // Режим наведения (по умолчанию выключен)
  //     }
  //   }
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>

<script setup>
import QuizBlock from '/src/components/QuizBlock.vue'
</script>

<template>
  <div class="mb-28 lg:mb-20 md:mb-10 sm:mb-4">
    <div class="flex justify-start">
      <div
        class="pr-10 w-fit py-2 bg-customPurple hover:bg-opacity-50 hover:border-t-2 hover:border-white rounded-r-[100px] duration-100 pl-[135px] lg:pl-[100px] md:pl-[50px] sm:pl-[20px] mr-10 sm:mr-4 my-20 text-white flex items-center"
      >
        <p class="text-[40px] lg:text-[30px] md:text-[25px] sm:text-[20px] font-myMedium">квиз</p>
      </div>
      <p
        class="mr-[135px] lg:mr-[100px] md:mr-[50px] sm:mr-[20px] my-20 text-white flex items-center text-[40px] lg:text-[30px] md:text-[25px] sm:text-[20px] xs:text-[16px] md:flex md:flex-col md:items-start font-myMedium"
      >
        на тему —&ensp;<span class="text-customPurple"> композиция</span>
      </p>
    </div>

    <div class="flex items-center mb-20 mx-[135px] lg:mx-[100px] md:mx-[50px] sm:mx-[20px]">
      <p
        class="text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px] flex align-center"
      >
        Готовы проверить, как хорошо вы освоили принципы композиции? Этот квиз станет замечательным
        тестом на знания о балансе, контрасте и ритме. Пройдите квиз и убедитесь, что вы готовы
        создавать гармоничные и уравновешенные композиции в своих проектах!
      </p>
    </div>

    <QuizBlock
      number="1"
      question="Какой из этих вариантов композиции демонстрирует ассиметрию?"
      answer="second"
      explanationAnswer="В этом варианте ответа представлена ассиметрия, так как предметы не упорядочены и нессиметричны по отношению к другим."
    >
      <div
        class="col-start-1 col-end-5 row-start-2 row-end-4 sm:col-start-1 sm:col-end-8 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <img
          class="hover:scale-110"
          src="/src/img/quiz/composition/1_1.svg"
          alt="Ошибка загрузки изображения! Перезагрузите страницу"
        />
      </div>
      <div
        class="col-start-5 col-end-9 row-start-2 row-end-4 sm:row-start-5 sm:row-end-7 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-center flex items-center justify-center border-4 border-white rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <img
          class="hover:scale-110"
          src="/src/img/quiz/composition/1_2.svg"
          alt="Ошибка загрузки изображения! Перезагрузите страницу"
        />
      </div>
      <div
        class="col-start-9 col-end-13 row-start-2 row-end-4 sm:col-start-8 sm:col-end-13 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-end flex items-center justify-center border-4 border-white rounded-bl-[60px] lg:rounded-bl-[40px] md:rounded-bl-[40px] sm:rounded-bl-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <img
          class="hover:scale-110"
          src="/src/img/quiz/composition/1_3.svg"
          alt="Ошибка загрузки изображения! Перезагрузите страницу"
        />
      </div>
    </QuizBlock>
    <QuizBlock
      number="2"
      question="На какой композиции внимание зрителя сосредоточено по центру?"
      answer="third"
      explanationAnswer="В этом варианте ответа внимание зрителя сосредоточено по центру, так как по центру распложены 2 квадрата, в отличие от углов, где имеется только по 1му квадрату."
    >
      <div
        class="col-start-1 col-end-5 row-start-2 row-end-4 sm:col-start-1 sm:col-end-8 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <img
          class="hover:scale-110"
          src="/src/img/quiz/composition/2_1.svg"
          alt="Ошибка загрузки изображения! Перезагрузите страницу"
        />
      </div>
      <div
        class="col-start-5 col-end-9 row-start-2 row-end-4 sm:row-start-5 sm:row-end-7 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-center flex items-center justify-center border-4 border-white rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <img
          class="hover:scale-110"
          src="/src/img/quiz/composition/2_2.svg"
          alt="Ошибка загрузки изображения! Перезагрузите страницу"
        />
      </div>
      <div
        class="col-start-9 col-end-13 row-start-2 row-end-4 sm:col-start-8 sm:col-end-13 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-end flex items-center justify-center border-4 border-white rounded-bl-[60px] lg:rounded-bl-[40px] md:rounded-bl-[40px] sm:rounded-bl-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <img
          class="hover:scale-110"
          src="/src/img/quiz/composition/2_3.svg"
          alt="Ошибка загрузки изображения! Перезагрузите страницу"
        />
      </div>
    </QuizBlock>
    <QuizBlock
      number="3"
      question="Какой из этих вариантов композиции демонстрирует ритм?"
      answer="third"
      explanationAnswer="В этом варианте ответа представлен ритм, так как одинаковые элементы используются с определенным интервалом."
    >
      <div
        class="col-start-1 col-end-5 row-start-2 row-end-4 sm:col-start-1 sm:col-end-8 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <img
          class="hover:scale-110"
          src="/src/img/quiz/composition/3_1.svg"
          alt="Ошибка загрузки изображения! Перезагрузите страницу"
        />
      </div>
      <div
        class="col-start-5 col-end-9 row-start-2 row-end-4 sm:row-start-5 sm:row-end-7 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-center flex items-center justify-center border-4 border-white rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <img
          class="hover:scale-110"
          src="/src/img/quiz/composition/3_2.svg"
          alt="Ошибка загрузки изображения! Перезагрузите страницу"
        />
      </div>
      <div
        class="col-start-9 col-end-13 row-start-2 row-end-4 sm:col-start-8 sm:col-end-13 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-end flex items-center justify-center border-4 border-white rounded-bl-[60px] lg:rounded-bl-[40px] md:rounded-bl-[40px] sm:rounded-bl-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <img
          class="hover:scale-110"
          src="/src/img/quiz/composition/3_3.svg"
          alt="Ошибка загрузки изображения! Перезагрузите страницу"
        />
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

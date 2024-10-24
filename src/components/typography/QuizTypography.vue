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
        на тему —&ensp;<span class="text-customPurple"> типографика </span>
      </p>
    </div>

    <div class="flex items-center mb-20 mx-[135px]">
      <p class="text-white font-myUnbounded font-light text-[22px] flex align-center">
        Проверьте, насколько хорошо вы разобрались в тонкостях шрифтов! Этот квиз - отличный способ
        оценить свои знания о классификации шрифтов, их стилях и характеристиках.
      </p>
    </div>

    <QuizBlock
      number="1"
      question="Какой из предложенных шрифтов имеет курсивное начертание?"
      answer="third"
      explanationAnswer="Курсивным начертанием является начертание с характерным наклоном вбок."
    >
      <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
        <div
          class="w-[310px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <span
            class="text-customOrange text-[105px] font-myJost font-semibold hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >Аа</span
          >
        </div>
        <div
          class="w-[310px] aspect-square flex items-center justify-center border-4 border-white rounded-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <span
            class="text-customOrange text-[105px] font-myJost font-extralight hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >Аа</span
          >
        </div>
        <div
          class="w-[310px] aspect-square flex items-center justify-center border-4 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <span
            class="text-customOrange text-[105px] font-myJost italic hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >Аа</span
          >
        </div>
      </div>
    </QuizBlock>

    <QuizBlock
      number="2"
      question="Какой из предложенных шрифтов относится к классу шрифтов — антиква?"
      answer="second"
      explanationAnswer="Антиквы — это классические шрифты с засечками, отличающиеся элегантностью и формальностью. "
    >
      <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
        <div
          class="w-[310px] group aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <span
            class="text-customLime text-[85px] font-myUnbounded font-regular hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >Аа</span
          >
        </div>
        <div
          class="w-[310px] group aspect-square flex items-center justify-center border-4 border-white rounded-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <span
            class="text-customLime text-[105px] font-myPlayfairDisplay mt-[-20px] hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >Аа</span
          >
        </div>
        <div
          class="w-[310px] group aspect-square flex items-center justify-center border-4 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <span
            class="text-customLime text-[105px] font-myGeologica hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >Аа</span
          >
        </div>
      </div>
    </QuizBlock>

    <QuizBlock
      number="3"
      question="Какой из предложенных шрифтов имеет засечки?"
      answer="first"
      explanationAnswer="Засечками называется короткий, обычно перпендикулярный штрих на конце буквы, с которого начинается и которым заканчивается основной штрих знака."
    >
      <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
        <div
          class="w-[310px] group aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-12 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <span
            class="text-customOrange text-[105px] font-myPlayfairDisplay hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >Аа</span
          >
        </div>
        <div
          class="w-[310px] group aspect-square flex items-center justify-center border-4 border-white rounded-[60px] p-12 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <span
            class="text-customOrange text-[85px] font-myUnbounded font-bold hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >Аа</span
          >
        </div>
        <div
          class="w-[310px] group aspect-square flex items-center justify-center border-4 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] p-12 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <span
            class="text-customOrange text-[85px] font-myUnbounded font-regular hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >Аа</span
          >
        </div>
      </div>
    </QuizBlock>

    <QuizBlock
      number="4"
      question="Какие из сочетаний шрифтов составляют иерархию веса?"
      answer="third"
      explanationAnswer="В этом варианте ответа представлена иерархия веса, так как используются разные начертания одного и того же шрифта."
    >
      <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
        <div
          class="w-[310px] aspect-square flex flex-col justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <span
            class="text-customLime text-[40px] mt-[-20px] font-myUnbounded font-regular hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >шрифт</span
          >
          <span
            class="text-customLime text-[30px] leading-3 font-myUnbounded font-regular hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >шрифт</span
          >
        </div>
        <div
          class="w-[310px] aspect-square flex flex-col justify-center border-4 border-white rounded-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <span
            class="text-customLime text-[40px] mt-[-20px] font-myUnbounded font-bold hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >шрифт</span
          >
          <span
            class="text-customLime text-[30px] leading-3 font-myUnbounded font-bold hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >шрифт</span
          >
        </div>
        <div
          class="w-[310px] aspect-square flex flex-col justify-center border-4 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
        >
          <span
            class="text-customLime text-[40px] mt-[-20px] font-myUnbounded font-black hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >шрифт</span
          >
          <span
            class="text-customLime text-[30px] leading-3 font-myUnbounded font-extralight hover:text-white hover:scale-125 transition-all transform duration-700 ease-in-out"
            >шрифт</span
          >
        </div>
      </div>
    </QuizBlock>
  </div>
</template>

<script>
export default {
  name: 'QuizTypography'
}
</script>

<style scoped></style>

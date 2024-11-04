<script setup>
import QuizBlock from '/src/components/QuizBlock.vue'
</script>

<template>
  <div class="mb-28 lg:mb-20 md:mb-10 sm:mb-4">
    <div class="flex justify-start">
      <div
        class="pr-10 sm:pr-4 w-fit py-2 bg-customPurple hover:bg-opacity-50 hover:border-t-2 hover:border-white rounded-r-[100px] duration-100 pl-[135px] lg:pl-[100px] md:pl-[50px] sm:pl-[20px] mr-10 sm:mr-4 my-20 text-white flex items-center"
      >
        <p class="text-[40px] lg:text-[30px] md:text-[25px] sm:text-[20px] font-myMedium">квиз</p>
      </div>
      <p
        class="mr-[135px] lg:mr-[100px] md:mr-[50px] sm:mr-[20px] my-20 text-white flex items-center text-[40px] lg:text-[30px] md:text-[25px] sm:text-[20px] xs:text-[16px] md:flex md:flex-col md:items-start font-myMedium"
      >
        на тему —&ensp;<span class="text-customPurple"> типографика</span>
      </p>
    </div>

    <div class="flex items-center mb-20 mx-[135px] lg:mx-[100px] md:mx-[50px] sm:mx-[20px]">
      <p
        class="text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] flex align-center"
      >
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
      <div
        class="col-start-1 col-end-5 row-start-2 row-end-4 sm:col-start-1 sm:col-end-8 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-4 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <span
          class="text-customOrange text-[105px] sm:text-[70px] font-myJost font-semibold hover:text-white hover:scale-125"
          >Аа</span
        >
      </div>
      <div
        class="col-start-5 col-end-9 row-start-2 row-end-4 sm:row-start-5 sm:row-end-7 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-center flex items-center justify-center border-4 border-white rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] p-16 lg:p-14 md:p-12 sm:p-4 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <span
          class="text-customOrange text-[105px] sm:text-[70px] font-myJost font-extralight hover:text-white hover:scale-125"
          >Аа</span
        >
      </div>
      <div
        class="col-start-9 col-end-13 row-start-2 row-end-4 sm:col-start-8 sm:col-end-13 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-end flex items-center justify-center border-4 border-white rounded-bl-[60px] lg:rounded-bl-[40px] md:rounded-bl-[40px] sm:rounded-bl-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-4 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <span
          class="text-customOrange text-[105px] sm:text-[70px] font-myJost italic hover:text-white hover:scale-125"
          >Аа</span
        >
      </div>
    </QuizBlock>

    <QuizBlock
      number="2"
      question="Какой из предложенных шрифтов относится к классу шрифтов — антиква?"
      answer="second"
      explanationAnswer="Антиквы — это классические шрифты с засечками, отличающиеся элегантностью и формальностью."
    >
      <div
        class="col-start-1 col-end-5 row-start-2 row-end-4 sm:col-start-1 sm:col-end-8 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-4 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <span
          class="text-customLime text-[85px] sm:text-[55px] font-myUnbounded font-regular hover:text-white hover:scale-125"
          >Аа</span
        >
      </div>
      <div
        class="col-start-5 col-end-9 row-start-2 row-end-4 sm:row-start-5 sm:row-end-7 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-center flex items-center justify-center border-4 border-white rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] p-16 lg:p-14 md:p-12 sm:p-4 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <span
          class="text-customLime text-[105px] sm:text-[70px] font-myPlayfairDisplay mt-[-20px] hover:text-white hover:scale-125"
          >Аа</span
        >
      </div>
      <div
        class="col-start-9 col-end-13 row-start-2 row-end-4 sm:col-start-8 sm:col-end-13 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-end flex items-center justify-center border-4 border-white rounded-bl-[60px] lg:rounded-bl-[40px] md:rounded-bl-[40px] sm:rounded-bl-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-9 sm:p-4 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <span
          class="text-customLime text-[105px] sm:text-[70px] font-myGeologica hover:text-white hover:scale-125"
          >Аа</span
        >
      </div>
    </QuizBlock>

    <QuizBlock
      number="3"
      question="Какой из предложенных шрифтов имеет засечки?"
      answer="first"
      explanationAnswer="Засечками называется короткий, обычно перпендикулярный штрих на конце буквы, с которого начинается и которым заканчивается основной штрих знака."
    >
      <div
        class="col-start-1 col-end-5 row-start-2 row-end-4 sm:col-start-1 sm:col-end-8 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-8 sm:p-4 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <span
          class="text-customOrange text-[105px] sm:text-[70px] font-myPlayfairDisplay hover:text-white hover:scale-125"
          >Аа</span
        >
      </div>
      <div
        class="col-start-5 col-end-9 row-start-2 row-end-4 sm:row-start-5 sm:row-end-7 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-center flex items-center justify-center border-4 border-white rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] p-16 lg:p-14 md:p-12 sm:p-4 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <span
          class="text-customOrange text-[85px] sm:text-[55px] font-myUnbounded font-bold hover:text-white hover:scale-125"
          >Аа</span
        >
      </div>
      <div
        class="col-start-9 col-end-13 row-start-2 row-end-4 sm:col-start-8 sm:col-end-13 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-end flex items-center justify-center border-4 border-white rounded-bl-[60px] lg:rounded-bl-[40px] md:rounded-bl-[40px] sm:rounded-bl-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-4 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <span
          class="text-customOrange text-[85px] sm:text-[55px] font-myUnbounded font-regular hover:text-white hover:scale-125"
          >Аа</span
        >
      </div>
    </QuizBlock>

    <QuizBlock
      number="4"
      question="Какие из сочетаний шрифтов составляют иерархию веса?"
      answer="third"
      explanationAnswer="В этом варианте ответа представлена иерархия веса, так как используются разные начертания одного и того же шрифта."
    >
      <div
        class="col-start-1 col-end-5 row-start-2 row-end-4 sm:col-start-1 sm:col-end-8 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square flex flex-col justify-center border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-14 lg:p-8 md:p-4 sm:p-5 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <span
          class="text-customLime text-[40px] md:text-[35px] sm:text-[22px] mt-[-20px] font-myUnbounded font-regular hover:text-white hover:scale-125"
          >шрифт</span
        >
        <span
          class="text-customLime text-[30px] md:text-[26px] sm:text-[16px] leading-3 font-myUnbounded font-regular hover:text-white hover:scale-125"
          >шрифт</span
        >
      </div>
      <div
        class="col-start-5 col-end-9 row-start-2 row-end-4 sm:row-start-5 sm:row-end-7 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-center flex flex-col justify-center border-4 border-white rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] p-14 lg:p-8 md:p-4 sm:p-5 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <span
          class="text-customLime text-[40px] md:text-[35px] sm:text-[22px] mt-[-20px] font-myUnbounded font-bold hover:text-white hover:scale-125"
          >шрифт</span
        >
        <span
          class="text-customLime text-[30px] md:text-[26px] sm:text-[16px] leading-3 font-myUnbounded font-bold hover:text-white hover:scale-125"
          >шрифт</span
        >
      </div>
      <div
        class="col-start-9 col-end-13 row-start-2 row-end-4 sm:col-start-8 sm:col-end-13 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-end flex flex-col justify-center border-4 border-white rounded-bl-[60px] lg:rounded-bl-[40px] md:rounded-bl-[40px] sm:rounded-bl-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-14 lg:p-8 md:p-4 sm:p-5 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <span
          class="text-customLime text-[40px] md:text-[35px] sm:text-[22px] mt-[-20px] font-myUnbounded font-black hover:text-white hover:scale-125"
          >шрифт</span
        >
        <span
          class="text-customLime text-[30px] md:text-[26px] sm:text-[16px] leading-3 font-myUnbounded font-extralight hover:text-white hover:scale-125"
          >шрифт</span
        >
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

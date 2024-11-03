<script setup>
import QuizBlock from '/src/components/QuizBlock.vue'
</script>

<template>
  <!-- Текст "начинается с основ" -->
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
        на тему —&ensp;<span class="text-customPurple"> колористика</span>
      </p>
    </div>

    <div class="flex items-center mb-20 mx-[135px] lg:mx-[100px] md:mx-[50px] sm:mx-[20px]">
      <p
        class="text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] flex align-center"
      >
        Проверьте свои знания на практике! Этот квиз поможет вам оценить, как хорошо вы усвоили
        основные принципы цветового круга, цветовых гармоний и психологии цвета. Готовы ли вы
        доказать, что стали настоящим мастером цвета?
      </p>
    </div>

    <QuizBlock
      number="1"
      question="Какой из представленных цветов является основным?"
      answer="first"
      explanationAnswer="Данный цвет является основным, основными цветами по цветовому кругу Иттена считаются: красный, синий и желтый."
    >
      <div
        class="group col-start-1 col-end-5 row-start-2 row-end-4 sm:col-start-1 sm:col-end-8 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <div
          class="bg-customYellow w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
      </div>
      <div
        class="group col-start-5 col-end-9 row-start-2 row-end-4 sm:row-start-5 sm:row-end-7 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-center flex items-center justify-center border-4 border-white rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <div
          class="bg-customOrange w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
      </div>
      <div
        class="group col-start-9 col-end-13 row-start-2 row-end-4 sm:col-start-8 sm:col-end-13 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-end flex items-center justify-center border-4 border-white rounded-bl-[60px] lg:rounded-bl-[40px] md:rounded-bl-[40px] sm:rounded-bl-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <div
          class="bg-customGreen w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
      </div>
    </QuizBlock>

    <QuizBlock
      number="2"
      question="Какое из сочетаний цветов является комплементарным?"
      answer="first"
      explanationAnswer="Это сочетание цветов является комплементарным, так как эти цвета находятся напротив друг друга на цветовом круге Иттена. Также такими цветовыми сочетаниями считаются, например, фиолетовый и желтый."
    >
      <div
        class="group gap-5 col-start-1 col-end-5 row-start-2 row-end-4 sm:col-start-1 sm:col-end-8 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 xs:p-6 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <div
          class="bg-customBlue group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
        <div
          class="bg-customOrange group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
      </div>
      <div
        class="group gap-5 col-start-5 col-end-9 row-start-2 row-end-4 sm:row-start-5 sm:row-end-7 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-center flex items-center justify-center border-4 border-white rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] p-16 lg:p-14 md:p-12 sm:p-10 xs:p-6 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <div
          class="bg-customPurple group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
        <div
          class="bg-customPurple_o66 group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
      </div>
      <div
        class="group gap-5 col-start-9 col-end-13 row-start-2 row-end-4 sm:col-start-8 sm:col-end-13 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-end flex items-center justify-center border-4 border-white rounded-bl-[60px] lg:rounded-bl-[40px] md:rounded-bl-[40px] sm:rounded-bl-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 xs:p-6 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <div
          class="bg-customLime group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
        <div
          class="bg-customOrange group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
      </div>
    </QuizBlock>

    <QuizBlock
      number="3"
      question="Какая из палитр содержит как теплые, так и холодные цвета?"
      answer="third"
      explanationAnswer="Холодными цветами являются: синие, фиолетовые, зеленые оттенки, а теплыми: желтые, красные, оранжевые."
    >
      <div
        class="group gap-3 col-start-1 col-end-5 row-start-2 row-end-4 sm:col-start-1 sm:col-end-8 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 xs:p-6 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <div
          class="bg-customPurple group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
        <div
          class="bg-customBlue group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
        <div
          class="bg-customGreen group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
      </div>
      <div
        class="group gap-3 col-start-5 col-end-9 row-start-2 row-end-4 sm:row-start-5 sm:row-end-7 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-center flex items-center justify-center border-4 border-white rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] p-16 lg:p-14 md:p-12 sm:p-10 xs:p-6 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <div
          class="bg-customYellow group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
        <div
          class="bg-customLime group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
        <div
          class="bg-customRed group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
      </div>
      <div
        class="group gap-3 col-start-9 col-end-13 row-start-2 row-end-4 sm:col-start-8 sm:col-end-13 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-end flex items-center justify-center border-4 border-white rounded-bl-[60px] lg:rounded-bl-[40px] md:rounded-bl-[40px] sm:rounded-bl-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 xs:p-6 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <div
          class="bg-customOrange group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
        <div
          class="bg-customRed group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
        <div
          class="bg-customPurple group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
        ></div>
      </div>
    </QuizBlock>

    <QuizBlock
      number="4"
      question="Какой из цветов вызывает ассоциацию с теплом, энтузиазмом, весельем?"
      answer="second"
      explanationAnswer="В психологии цвета оранжевый считается цветом, ассооциирующимся с теплом, энтузиазмом и весельем."
    >
      <div
        class="group col-start-1 col-end-5 row-start-2 row-end-4 sm:col-start-1 sm:col-end-8 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] lg:rounded-br-[40px] md:rounded-br-[40px] sm:rounded-br-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <div
          class="bg-customLime w-full aspect-square group-hover:rounded-[100px] hover:scale-75"
        ></div>
      </div>
      <div
        class="group col-start-5 col-end-9 row-start-2 row-end-4 sm:row-start-5 sm:row-end-7 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-center flex items-center justify-center border-4 border-white rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <div
          class="bg-customOrange w-full aspect-square group-hover:rounded-[100px] hover:scale-75"
        ></div>
      </div>
      <div
        class="group col-start-9 col-end-13 row-start-2 row-end-4 sm:col-start-8 sm:col-end-13 w-[310px] lg:w-[260px] md:w-[220px] sm:w-[150px] aspect-square justify-self-end flex items-center justify-center border-4 border-white rounded-bl-[60px] lg:rounded-bl-[40px] md:rounded-bl-[40px] sm:rounded-bl-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[40px] sm:rounded-tl-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] p-16 lg:p-14 md:p-12 sm:p-10 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
      >
        <div
          class="bg-customYellow w-full aspect-square group-hover:rounded-[100px] hover:scale-75"
        ></div>
      </div>
    </QuizBlock>
  </div>
</template>

<script>
export default {
  name: 'QuizColor'
}
</script>

<style scoped></style>

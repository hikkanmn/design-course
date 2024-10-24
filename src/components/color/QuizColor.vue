<script setup>
import QuizBlock from '/src/components/QuizBlock.vue'
</script>

<template>
  <!-- Текст "начинается с основ" -->
  <div class="mb-28">
    <div class="flex justify-start">
      <div
        class="pr-10 w-fit py-2 bg-customPurple hover:bg-opacity-50 hover:border-t-2 hover:border-white rounded-r-[100px] duration-100 pl-[135px] mr-10 my-20 text-white flex items-center"
      >
        <p class="text-[43px] font-myMedium">квиз</p>
      </div>
      <p class="mr-[135px] my-20 text-white flex items-center text-[43px] font-myMedium">
        на тему —&ensp;<span class="text-customPurple"> колористика</span>
      </p>
    </div>

    <div class="flex items-center mb-20 mx-[135px]">
      <p class="text-white font-myUnbounded font-light text-[22px] flex align-center">
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
      <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
        <div
          class="group w-[310px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
        >
          <div
            class="bg-customYellow w-full aspect-square m-8 group-hover:rounded-[100px] hover:scale-125"
          ></div>
        </div>
        <div
          class="group w-[310px] aspect-square flex items-center justify-center border-4 border-white rounded-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
        >
          <div
            class="bg-customOrange w-full aspect-square m-8 group-hover:rounded-[100px] hover:scale-125"
          ></div>
        </div>
        <div
          class="group w-[310px] aspect-square flex items-center justify-center border-4 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
        >
          <div
            class="bg-customGreen w-full aspect-square m-8 group-hover:rounded-[100px] hover:scale-125"
          ></div>
        </div>
      </div>
    </QuizBlock>

    <QuizBlock
      number="2"
      question="Какое из сочетаний цветов является комплементарным?"
      answer="first"
      explanationAnswer="Это сочетание цветов является комплементарным, так как эти цвета находятся напротив друг друга на цветовом круге Иттена. Также такими цветовыми сочетаниями считаются, например, фиолетовый и желтый."
    >
      <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
        <div
          class="w-[310px] gap-5 group aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
        >
          <div
            class="bg-customBlue group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
          ></div>
          <div
            class="bg-customOrange group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
          ></div>
        </div>
        <div
          class="w-[310px] gap-5 group aspect-square flex items-center justify-center border-4 border-white rounded-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
        >
          <div
            class="bg-customPurple group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
          ></div>
          <div
            class="bg-customPurple_o66 group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
          ></div>
        </div>
        <div
          class="w-[310px] gap-5 group aspect-square flex items-center justify-center border-4 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
        >
          <div
            class="bg-customLime group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
          ></div>
          <div
            class="bg-customOrange group-hover:bg-scale-125 w-full aspect-square group-hover:rounded-[100px] hover:scale-125"
          ></div>
        </div>
      </div>
    </QuizBlock>

    <QuizBlock
      number="3"
      question="Какая из палитр содержит как теплые, так и холодные цвета?"
      answer="third"
      explanationAnswer="Холодными цветами являются: синие, фиолетовые, зеленые оттенки, а теплыми: желтые, красные, оранжевые."
    >
      <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
        <div
          class="w-[310px] gap-5 group aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-12 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
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
          class="w-[310px] gap-5 group aspect-square flex items-center justify-center border-4 border-white rounded-[60px] p-12 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
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
          class="w-[310px] gap-5 group aspect-square flex items-center justify-center border-4 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] p-12 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
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
      </div>
    </QuizBlock>

    <QuizBlock
      number="4"
      question="Какой из цветов вызывает ассоциацию с теплом, энтузиазмом, весельем?"
      answer="second"
      explanationAnswer="В психологии цвета оранжевый считается цветом, ассооциирующимся с теплом, энтузиазмом и весельем."
    >
      <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
        <div
          class="group w-[310px] aspect-square flex items-center justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
        >
          <div
            class="bg-customLime w-full aspect-square m-8 group-hover:rounded-[100px] hover:scale-75"
          ></div>
        </div>
        <div
          class="group w-[310px] aspect-square flex items-center justify-center border-4 border-white rounded-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
        >
          <div
            class="bg-customOrange w-full aspect-square m-8 group-hover:rounded-[100px] hover:scale-75"
          ></div>
        </div>
        <div
          class="group w-[310px] aspect-square flex items-center justify-center border-4 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10"
        >
          <div
            class="bg-customYellow w-full aspect-square m-8 group-hover:rounded-[100px] hover:scale-75"
          ></div>
        </div>
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

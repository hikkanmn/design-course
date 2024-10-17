<script setup></script>

<template>
  <!-- Текст "начинается с основ" -->
  <div class="grid grid-cols-12 grid-rows-5 gap-y-[30px] gap-x-[10px] px-[135px] mb-10">
    <span class="text-[70px] font-myMedium text-customOrange">{{ number }}</span>
    <p
      class="col-start-2 col-end-13 row-start-1 row-end-2 flex items-end text-white font-myUnbounded font-light text-[22px]"
    >
      {{ question }}
    </p>

    <div class="col-start-1 col-end-13 row-start-2 row-end-5 flex justify-between items-center">
      <div
        class="w-[310px] h-[310px] flex items-center justify-center border-4 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
      >
        <img
          class="hover:scale-110 transition-all transform duration-700 ease-in-out"
          :src="`${first_link}`"
          alt="Ошибка загрузки изображения! Перезагрузите страницу"
        />
      </div>
      <div
        class="w-[310px] h-[310px] flex items-center justify-center border-4 border-white rounded-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
      >
        <img
          class="hover:scale-110 transition-all transform duration-700 ease-in-out"
          :src="`${second_link}`"
          alt="Ошибка загрузки изображения! Перезагрузите страницу"
        />
      </div>
      <div
        class="w-[310px] h-[310px] flex items-center justify-center border-4 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] p-16 hover:bg-customOrange hover:border-customOrange hover:bg-opacity-10 transition-all duration-700 ease-in-out"
      >
        <img
          class="hover:scale-110 transition-all transform duration-700 ease-in-out"
          :src="`${third_link}`"
          alt="Ошибка загрузки изображения! Перезагрузите страницу"
        />
      </div>
    </div>

    <div class="col-start-1 col-end-13 row-start-5 row-end-6 flex justify-between items-center">
      <button
        class="w-[310px] font-myUnbounded font-medium text-white text-[22px] bg-customPurple rounded-[60px] py-4 px-10 hover:bg-customLime hover:text-customBlack hover:scale-110 transition-all duration-700 ease-in-out"
      >
        ответить
      </button>
      <button
        class="w-[310px] font-myUnbounded font-medium text-white text-[22px] bg-customPurple rounded-[60px] py-4 px-10 hover:bg-customLime hover:text-customBlack hover:scale-110 transition-all duration-700 ease-in-out"
      >
        ответить
      </button>
      <button
        class="w-[310px] font-myUnbounded font-medium text-white text-[22px] bg-customPurple rounded-[60px] py-4 px-10 hover:bg-customLime hover:text-customBlack hover:scale-110 transition-all duration-700 ease-in-out"
      >
        ответить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizBlock',
  props: {
    number: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    first_link: {
      type: String,
      required: true
    },
    second_link: {
      type: String,
      required: true
    },
    third_link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>

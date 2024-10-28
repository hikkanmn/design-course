<template>
  <div class="mt-[70px] mb-[-150px] md:mb-[-50px] lg:mt-[50px] md:mt-[25px] sm:mt-0">
    <!-- Заголовок -->
    <div class="group w-full flex text-center flex-col">
      <h1
        class="text-[9rem] lg:text-[7rem] md:text-[5rem] sm:text-[4rem] xs:text-[3rem] uppercase font-myMedium text-white flex flex-col group-hover:text-customOrange"
      >
        дизайн
        <span class="mt-[-75px] lg:mt-[-65px] md:mt-[-45px] sm:mt-[-25px] group-hover:text-customPurple">просто</span>
      </h1>
    </div>

    <!-- Текст "начинается с основ" -->
    <div class="flex justify-end mt-5">
      <div
        class="pl-16 py-5 border-customLime border-y-4 border-l-4 rounded-l-full text-end pr-[135px] lg:pr-[100px] md:pr-[50px] sm:pr-[20px]"
      >
        <p class="text-[22px] lg:text-[20px] md:text-[16px] sm:text-[14px] font-myUnbounded font-medium text-white">
          начинается с основ
        </p>
      </div>
    </div>

    <!-- Основной текст и кнопка -->
    <div
      class="grid grid-cols-12 grid-rows-4 gap-y-[30px] gap-x-[10px] mt-10 md:mt-0 px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px]"
    >
      <!-- Текстовый блок -->
      <p
        class="font-myUnbounded font-light text-[30px] lg:text-[26px] md:text-[22px] sm:text-[20px] col-start-1 col-end-9 row-start-2 row-end-4 sm:col-end-13 text-white leading-relaxed"
      >
        Этот сайт — пособие для студентов, решивших погрузиться в мир дизайна. Здесь ты найдешь все,
        что нужно, чтобы начать свой путь дизайнера и обучиться основам этой профессии.
      </p>

      <!-- Кнопка с стрелкой -->
      <div class="flex items-center justify-end col-start-10 col-end-13 row-start-2 row-end-4 sm:row-start-4 sm:row-end-5 sm:col-start-1 justify-self-start">
        <router-link
          title="переход к разделу Копмозиция"
          class="flex items-center justify-center"
          to="/composition"
          @click="scrollToTop"
          ><button
            class="px-[25px] py-[15px] w-full lowercase font-myUnbounded font-medium text-[22px] lg:text-[20px] md:text-[18px] bg-customOrange text-white rounded-full hover:bg-customLime hover:scale-110 hover:text-customBlack"
          >
            начать сейчас
          </button>
        </router-link>
      </div>
    </div>
    <div class="flex justify-end mt-10">
      <div
        class="pl-8 py-5 border-customLime border-y-4 border-l-4 rounded-l-full text-end pr-[135px] lg:pr-[100px] md:pr-[50px] sm:pr-[20px]"
      >
        <p
          class="flex flex-col pl-8 lowercase font-myUnbounded font-medium lg:text-[17px] md:text-[14px] text-[22px] text-white"
        >
          почему дизайн тесно <span> связан с психологией?</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroSection',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавно прокручиваем к верху
      })
    }
  }
}
</script>

<style scoped>
/* Можно добавить дополнительные стили, если нужно */
</style>

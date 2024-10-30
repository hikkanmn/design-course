<script setup></script>

<template>
  <div
    class="grid grid-cols-12 grid-rows-5 sm:grid-rows-7 md:grid-rows-4 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] mb-10 lg:mb-8 md:mb-4"
  >
    <span
      class="text-[70px] lg:text-[60px] md:text-[50px] sm:text-[40px] font-myMedium text-customOrange"
      >{{ number }}</span
    >
    <p
      class="col-start-2 col-end-13 row-start-1 row-end-2 sm:pl-4 flex items-end text-white font-myUnbounded font-light text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]"
    >
      {{ question }}
    </p>

    <slot></slot>

    <!-- <div
      class="col-start-1 col-end-13 row-start-5 row-end-6 md:row-start-4 md:row-end-5 flex justify-between items-center space-x-10"
    > -->
    <button
      @click="changeButtonText('buttonOne')"
      id="buttonOne"
      class="col-start-1 col-end-5 row-start-5 row-end-6 md:row-start-4 md:row-end-5 sm:col-start-1 sm:col-end-6 w-[280px] lg:w-[220px] md:w-[180px] sm:w-[160px] h-2/3 font-myUnbounded font-medium text-white text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]  bg-customPurple rounded-[60px] py-4 px-10 hover:bg-customLime hover:text-customBlack hover:scale-110 flex justify-center items-center"
      :class="{
        'dark:focus:bg-customLime dark:focus:text-customBlack active:bg-customLime active:text-customBlack':
          answer === 'first',
        'dark:focus:bg-customOrange dark:focus:text-white active:bg-customOrange active:focus:text-white':
          answer === 'second' || answer === 'third'
      }"
    >
      {{ buttonTextOne }}
    </button>
    <button
      @click="changeButtonText('buttonTwo')"
      id="buttonTwo"
      class="col-start-5 col-end-9 row-start-5 row-end-6 md:row-start-4 md:row-end-5 sm:row-start-7 sm:row-end-8 w-[280px] lg:w-[220px] md:w-[180px] sm:w-[160px] h-2/3 justify-self-center font-myUnbounded font-medium text-white text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]  bg-customPurple rounded-[60px] py-4 px-10 hover:bg-customLime hover:text-customBlack hover:scale-110 flex justify-center items-center"
      :class="{
        'dark:focus:bg-customOrange dark:focus:text-white active:bg-customOrange active:text-white':
          answer === 'first' || answer === 'third',
        'dark:focus:bg-customLime dark:focus:text-customBlack active:bg-customLime active:text-customBlack':
          answer === 'second'
      }"
    >
      {{ buttonTextTwo }}
    </button>
    <button
      @click="changeButtonText('buttonThree')"
      id="buttonThree"
      class="col-start-9 col-end-13 row-start-5 row-end-6 md:row-start-4 md:row-end-5 sm:col-start-8 sm:col-end-13 w-[280px] lg:w-[220px] md:w-[180px] sm:w-[160px] h-2/3 justify-self-end font-myUnbounded font-medium text-white text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]  bg-customPurple rounded-[60px] py-4 px-10 hover:bg-customLime hover:text-customBlack hover:scale-110 flex justify-center items-center"
      :class="{
        'dark:focus:bg-customOrange dark:focus:text-white active:bg-customOrange active:text-white':
          answer === 'first' || answer === 'second',
        'dark:focus:bg-customLime dark:focus:text-customBlack active:bg-customLime actives:text-customBlack':
          answer === 'third'
      }"
    >
      {{ buttonTextThree }}
    </button>
  </div>
  <!-- </div> -->

  <!-- Появление объясняющего текста -->
  <div
    class="mx-[135px] lg:mx-[100px] md:mx-[50px] sm:mx-[20px] flex justify-center items-center text-center"
  >
    <p
      v-if="showExplanation"
      class="border-4 border-customLime py-5 px-10 mb-16 rounded-[60px] lg:rounded-[40px] md:rounded-[40px] sm:rounded-[30px] text-white text-[22px] lg:text-[18px] sm:text-[16px] xs:text-[14px]  font-myUnbounded font-light"
    >
      <span class="text-customLime">Верно! </span> {{ explanationAnswer }}
    </p>
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
    answer: {
      type: String,
      required: true
    },
    explanationAnswer: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      buttonTextOne: 'Ответить',
      buttonTextTwo: 'Ответить',
      buttonTextThree: 'Ответить'
    }
  },
  methods: {
    changeButtonText(buttonId) {
      this.showExplanation = false

      if (buttonId === 'buttonOne') {
        if (this.answer === 'first') {
          this.buttonTextOne = 'Правильно'
          this.showExplanation = true
        } else {
          this.buttonTextOne = 'Неправильно'
        }
        this.buttonTextTwo = 'Ответить'
        this.buttonTextThree = 'Ответить'
      } else if (buttonId === 'buttonTwo') {
        if (this.answer === 'second') {
          this.buttonTextTwo = 'Правильно'
          this.showExplanation = true
        } else {
          this.buttonTextTwo = 'Неправильно'
        }
        this.buttonTextOne = 'Ответить'
        this.buttonTextThree = 'Ответить'
      } else if (buttonId === 'buttonThree') {
        if (this.answer === 'third') {
          this.buttonTextThree = 'Правильно'
          this.showExplanation = true
        } else {
          this.buttonTextThree = 'Неправильно'
        }
        this.buttonTextOne = 'Ответить'
        this.buttonTextTwo = 'Ответить'
      }
    }
  }
}
</script>

<style scoped></style>

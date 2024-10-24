<script setup></script>

<template>
  <div class="grid grid-cols-12 grid-rows-5 gap-y-[30px] gap-x-[10px] px-[135px] mb-10">
    <span class="text-[70px] font-myMedium text-customOrange">{{ number }}</span>
    <p
      class="col-start-2 col-end-13 row-start-1 row-end-2 flex items-end text-white font-myUnbounded font-light text-[22px]"
    >
      {{ question }}
    </p>

    <slot></slot>

    <div class="col-start-1 col-end-13 row-start-5 row-end-6 flex justify-between items-center">
      <button
        @click="changeButtonText('buttonOne')"
        id="buttonOne"
        class="w-[310px] font-myUnbounded font-medium text-white text-[22px] bg-customPurple rounded-[60px] py-4 px-10 hover:bg-customLime hover:text-customBlack hover:scale-110"
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
        class="w-[310px] font-myUnbounded font-medium text-white text-[22px] bg-customPurple rounded-[60px] py-4 px-10 hover:bg-customLime hover:text-customBlack hover:scale-110"
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
        class="w-[310px] font-myUnbounded font-medium text-white text-[22px] bg-customPurple rounded-[60px] py-4 px-10 hover:bg-customLime hover:text-customBlack hover:scale-110"
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
  </div>

  <!-- Появление объясняющего текста -->
  <div class="mx-[135px] flex justify-center items-center text-center">
    <p
      v-if="showExplanation"
      class="border-4 border-customLime py-5 px-10 mb-16 rounded-[60px] text-white text-[22px] font-myUnbounded font-light"
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

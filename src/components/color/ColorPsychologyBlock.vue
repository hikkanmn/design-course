<script setup></script>

<template>
  <div
    class="grid grid-cols-12 grid-rows-7 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px]"
  >
    <div
      class="col-start-1 col-end-13 row-start-1 row-end-2 z-10 bg-customPurple h-1/3 rounded-r-[60px] lg:rounded-r-[40px] md:rounded-r-[35px] sm:rounded-r-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[35px] sm:rounded-tl-[30px]"
    ></div>
    <div
      class="col-start-1 col-end-2 row-start-1 row-end-3 h-2/3 bg-customLime rounded-b-[60px] lg:rounded-b-[40px] md:rounded-b-[35px] sm:rounded-b-[30px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[35px] sm:rounded-tl-[30px] flex items-end justify-center p-4"
    >
      <span
        class="font-myUnbounded font-medium text-[55px] md:text-[45px] sm:text-[35px] xs:text-[20px] text-customBlack"
        >1</span
      >
    </div>
    <div
      class="col-start-4 col-end-5 row-start-1 row-end-3 bg-customPurple rounded-b-[100px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[35px] sm:rounded-tl-[30px] flex items-end justify-center p-4"
    >
      <span
        class="font-myUnbounded font-medium text-[55px] md:text-[45px] sm:text-[35px] xs:text-[20px] text-white"
        >2</span
      >
    </div>
    <div
      class="col-start-7 col-end-8 row-start-1 row-end-4 h-4/5 bg-customLime rounded-b-[100px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[35px] sm:rounded-tl-[30px] flex items-end justify-center p-4"
    >
      <span
        class="font-myUnbounded font-medium text-[55px] md:text-[45px] sm:text-[35px] xs:text-[20px] text-customBlack"
        >3</span
      >
    </div>
    <div
      class="col-start-10 col-end-11 row-start-1 row-end-4 bg-customPurple rounded-b-[100px] rounded-tl-[60px] lg:rounded-tl-[40px] md:rounded-tl-[35px] sm:rounded-tl-[30px] flex items-end justify-center p-4"
    >
      <span
        class="font-myUnbounded font-medium text-[55px] md:text-[45px] sm:text-[35px] xs:text-[20px] text-white"
        >4</span
      >
    </div>

    <h2
      class="col-start-1 col-end-9 row-start-4 row-end-6 font-myMedium uppercase text-[45px] lg:text-[35px] md:text-[25px] sm:text-[24px] xs:text-[18px] text-white leading-none mb-4"
    >
      психология цвета
    </h2>
    <p
      class="col-start-9 col-end-13 row-start-4 row-end-6 font-myUnbounded font-light lowercase text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] text-white leading-snug"
    >
      — изучение того, как разные цвета влияют на эмоции, ассоциации и восприятие информации у
      людей.
    </p>

    <!-- final block  -->
    <div
      class="col-start-1 col-end-9 row-start-5 row-end-8 flex flex-col justify-end text-white text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] font-myUnbounded font-light gap-5"
    >
      <h3 class="text-customLime mb-4">Применение психологии цвета:</h3>
      <p>
        • Выбор цветов для логотипов, брендов, веб-сайтов и других визуальных материалов, чтобы
        вызвать желаемые эмоции и ассоциации.
      </p>
      <p>
        • Создание контраста и акцента с помощью цветов, чтобы привлечь внимание к важным элементам.
      </p>
      <p>• Учет культурных и социальных факторов, что могут влиять на восприятие цвета.</p>
    </div>
  </div>

  <!-- основные принципы  -->
  <div class="flex justify-end mb-10">
    <div
      class="w-fit py-5 pr-[135px] lg:pr-[100px] md:pr-[50px] sm:pr-[20px] pl-12 border-b-4 border-l-4 border-t-4 border-customLime hover:bg-customLime hover:bg-opacity-10 rounded-l-[60px]"
    >
      <p
        class="loercase font-myUnbounded from-medium text-white text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px]"
      >
        основные принципы
      </p>
    </div>
  </div>

  <!-- colors on page/ block 2 -->
  <div
    class="grid grid-cols-12 grid-rows-4 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] mb-20 xs:mb-0"
  >
    <!-- block red  -->
    <p
      class="col-start-1 col-end-3 row-start-1 row-end-2 text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[10px] text-white font-myUnbounded font-light"
    >
      энергия, страсть, опасность
    </p>
    <div
      title="#FE2712"
      class="col-start-1 col-end-3 row-start-2 row-end-3 bg-customRed rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] border-4 border-customRed hover:bg-opacity-20"
    ></div>

    <!-- block orange  -->
    <p
      class="col-start-4 col-end-6 row-start-1 row-end-2 text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[10px] text-white font-myUnbounded font-light"
    >
      тепло, энтузиазм, веселье
    </p>
    <div
      title="#FF6316"
      class="col-start-4 col-end-6 row-start-2 row-end-3 bg-customOrange rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] border-4 border-customOrange hover:bg-opacity-20"
    ></div>

    <!-- block yellow  -->
    <p
      class="col-start-7 col-end-9 row-start-1 row-end-2 text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[10px] text-white font-myUnbounded font-light"
    >
      оптимизм, радость, энергия
    </p>
    <div
      title="#FEFE33"
      class="col-start-7 col-end-9 row-start-2 row-end-3 bg-customYellow rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] border-4 border-customYellow hover:bg-opacity-20"
    ></div>

    <!-- block lime  -->
    <p
      class="col-start-10 col-end-12 row-start-1 row-end-2 text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[10px] text-white font-myUnbounded font-light"
    >
      рост, природа, спокойствие
    </p>
    <div
      title="#B1F532"
      class="col-start-10 col-end-12 row-start-2 row-end-3 bg-customLime rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] border-4 border-customLime hover:bg-opacity-20"
    ></div>

    <!-- block blue  -->
    <div
      title="#448DBE"
      class="col-start-1 col-end-3 row-start-3 row-end-4 bg-customBlue rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] border-4 border-customBlue hover:bg-opacity-20"
    ></div>
    <p
      class="col-start-1 col-end-3 row-start-4 row-end-5 text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[10px] text-white font-myUnbounded font-light"
    >
      доверие, стабильность, спокойствие
    </p>

    <!-- block purple  -->
    <div
      title="#5541BA"
      class="col-start-4 col-end-6 row-start-3 row-end-4 bg-customPurple rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] border-4 border-customPurple hover:bg-opacity-20"
    ></div>
    <p
      class="col-start-4 col-end-6 row-start-4 row-end-5 text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[10px] text-white font-myUnbounded font-light"
    >
      роскошь, творчество, мистика
    </p>

    <!-- block black  -->
    <div
      title="#000000"
      class="col-start-7 col-end-9 row-start-3 row-end-4 bg-black rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] border-4 border-black hover:bg-opacity-20"
    ></div>
    <p
      class="col-start-7 col-end-9 row-start-4 row-end-5 text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[10px] text-white font-myUnbounded font-light"
    >
      грациозность, мощь, тайна
    </p>

    <!-- block white  -->
    <div
      title="#FFFFFF"
      class="col-start-10 col-end-12 row-start-3 row-end-4 bg-white rounded-[30px] lg:rounded-[25px] md:rounded-[20px] sm:rounded-[15px] border-4 border-white hover:bg-opacity-20"
    ></div>
    <p
      class="col-start-10 col-end-12 row-start-4 row-end-5 text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[10px] text-white font-myUnbounded font-light"
    >
      невинность, чистота, простота
    </p>
  </div>
</template>

<script>
export default {
  name: 'ColorPsychologyBlock'
}
</script>

<style scoped></style>

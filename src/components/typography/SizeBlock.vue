<script setup></script>

<template>
  <div
    class="mr-[135px] lg:mr-[100px] md:mr-[50px] sm:mr-[20px] bg-customPurple rounded-r-[100px] h-[40px]"
  ></div>
  
  <div
    class="grid grid-cols-12 grid-rows-4 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] mt-10 mb-20"
  >
    <div
      class="col-start col-end-2 row-start-1 row-end-2 group aspect-square hover:bg-customOrange bg-customLime rounded-[60px] px-12 md:px-8 xs:px-6 py-2 flex items-center justify-center"
    >
      <span
        class="font-myUnbounded font-bold text-customBlack text-[55px] md:text-[45px] sm:text-[35px] xs:text-[20px] group-hover:text-white"
        >2</span
      >
    </div>
    <h2
      class="col-start-3 col-end-6 row-start-1 row-end-2 self-center font-myMedium text-white text-[52px] lg:text-[40px] md:text-[30px] sm:text-[20px] xs:text-[14px]"
    >
      кегль
    </h2>
    <p
      class="col-start-6 col-end-13 row-start-1 row-end-2 self-center font-myUnbounded font-light text-white text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px]"
    >
      — это размер шрифта, измеряемый в пунктах (pt).
    </p>
    <p
      class="col-start-1 col-end-5 row-start-2 row-end-4 font-myMedium outline-4 outline-customPurple flex flex-col self-end group"
    >
      <span
        class="text-[74px] lg:text-[60px] md:text-[45px] sm:text-[32px] xs:text-[25px] leading-6 text-customPurple group-hover:text-customPurple_o66"
        >кегли</span
      ><span
        class="text-[55px] lg:text-[45px] md:text-[34px] sm:text-[24px] xs:text-[18px] text-customPurple_o66 group-hover:text-customPurple"
        >бывают</span
      ><span
        class="text-[47px] lg:text-[38px] md:text-[28px] sm:text-[20px] xs:text-[16px] leading-3 text-customPurple group-hover:text-customPurple_o66"
        >разными</span
      >
    </p>
    <div
      class="col-start-6 col-end-13 row-start-2 row-end-5 font-myUnbounded font-light text-white text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] self-center"
    >
      <h3 class="text-customLime mb-10">Преимущества использования гарнитур:</h3>
      <p>
        •<span class="text-customOrange"> Читаемость: </span>кегль должен быть достаточно большим,
        чтобы текст был легко читаемым;
      </p>
      <p>
        • <span class="text-customOrange"> Важность текста: </span> больший кегль используют для
        заголовков, чтобы привлечь внимание к главной информации;
      </p>
      <p>
        • <span class="text-customOrange"> Формат публикации: </span> кегль зависит от формата
        публикации (книга, журналы, веб-сайт).
      </p>
    </div>
  </div>
  <div
    class="grid grid-cols-12 grid-rows-9 lg:grid-rows-12 sm:grid-rows-11 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] pt-10 mb-20"
  >
    <!-- 1st block  -->
    <div
      class="col-start-1 col-end-5 row-start-1 row-end-2 lg:row-end-3 border-b-4 border-b-white py-4 self-end lg:self-center"
    >
      <p class="text-[11pt] font-myUnbounded font-regular text-white">
        Текст для книги примерно такой
      </p>
    </div>
    <div
      class="col-start-6 col-end-13 row-start-1 row-end-2 lg:row-end-3 border-4 hover:bg-customPurple hover:bg-opacity-20 border-customPurple rounded-l-[60px] lg:rounded-l-[40px] md:rounded-l-[40px] sm:rounded-l-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] px-10 py-6 flex items-center text-end lg:self-center"
    >
      <p
        class="text-white text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] font-myUnbounded font-light"
      >
        <span class="text-customPurple">Книги: </span>кегль для текста в книгах обычно составляет
        10-12 pt
      </p>
    </div>
    <!-- 2nd block  -->
    <div
      class="col-start-1 col-end-5 row-start-3 row-end-4 lg:row-end-5 border-b-4 border-b-white py-4 self-end lg:self-center"
    >
      <p class="text-[16px] font-myUnbounded font-regular text-white">
        Текст для веб-сайтов примерно такой
      </p>
    </div>
    <div
      class="col-start-6 col-end-13 row-start-3 row-end-4 lg:row-end-5 border-4 hover:bg-customLime hover:bg-opacity-20 border-customLime rounded-l-[60px] lg:rounded-l-[40px] md:rounded-l-[40px] sm:rounded-l-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] px-10 py-6 flex items-center text-end lg:self-center"
    >
      <p
        class="text-white text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] font-myUnbounded font-light"
      >
        <span class="text-customLime">Веб-сайты: </span>кегль для текста на веб-сайте обычно
        составляет 14-16 pt
      </p>
    </div>
    <!-- 3rd block  -->
    <div
      class="col-start-1 col-end-5 row-start-5 row-end-6 lg:row-end-7 border-b-4 border-b-white py-4 self-end lg:self-center"
    >
      <p class="text-[25px] sm:text-[18px] font-myUnbounded font-regular text-white">
        Текст для заголовка примерно такой
      </p>
    </div>
    <div
      class="col-start-6 col-end-13 row-start-5 row-end-6 lg:row-end-7 border-4 hover:bg-customPurple hover:bg-opacity-20 border-customPurple rounded-l-[60px] lg:rounded-l-[40px] md:rounded-l-[40px] sm:rounded-l-[30px] rounded-tr-[60px] lg:rounded-tr-[40px] md:rounded-tr-[40px] sm:rounded-tr-[30px] px-10 py-6 flex items-center text-end lg:self-center"
    >
      <p
        class="text-white text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] font-myUnbounded font-light"
      >
        <span class="text-customPurple">Заголовки: </span>кегль для заголовков больше: 20-30 pt или
        даже больше 10-12 pt
      </p>
    </div>

    <!-- text block  -->
    <div
      class="col-start-1 col-end-9 row-start-7 row-end-10 lg:row-start-8 lg:row-end-13 sm:row-end-11 sm:col-end-13 font-myUnbounded font-light text-white text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] self-center space-y-7 pr-10"
    >
      <h3 class="text-customLime">Причины, почему работа с кеглем важна:</h3>
      <p>• Правильный кегль делает текст легко читаемым и легким для восприятия;</p>
      <p>• Разный кегль помогает создать иерархию в тексте, выделяя заголовки и важные элементы;</p>
      <p>
        • Использование согласованного кегля во всех элементах дизайна делает его более гармоничным
        и уравновешенным.
      </p>
    </div>
    <a
      title="переход на Google Fonts"
      href="http://googlefonts.com/"
      class="col-start-9 col-end-13 row-start-7 row-end-8 lg:row-start-8 lg:row-end-13 sm:row-start-11 sm:row-end-12 sm:col-start-1 sm:justify-self-center flex items-center"
    >
      <button
        class="w-full h-fit px-4 py-6 sm:py-4 bg-customOrange text-white text-[22px] lg:text-[18px] sm:text-[14px] xs:text-[12px] font-myUnbounded font-medium rounded-[100px] hover:text-customBlack hover:bg-customLime hover:scale-110"
      >
        где найти шрифты?
      </button></a
    >
  </div>
</template>

<script>
export default {
  name: 'SizeBlock'
}
</script>

<style scoped></style>

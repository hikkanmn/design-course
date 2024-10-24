<script setup></script>

<template>
  <div class="mr-[135px] bg-customPurple rounded-r-[100px] h-[40px]"></div>
  <div class="grid grid-cols-12 grid-rows-4 gap-y-[30px] gap-x-[10px] px-[135px] mt-10 mb-20">
    <div
      class="col-start col-end-2 row-start-1 row-end-2 bg-customLime rounded-[60px] px-12 py-2 flex items-center justify-center"
    >
      <span class="font-myUnbounded font-bold text-customBlack text-[55px]">2</span>
    </div>
    <h2
      class="col-start-3 col-end-6 row-start-1 row-end-2 self-center font-myMedium text-white text-[52px]"
    >
      кегль
    </h2>
    <p
      class="col-start-6 col-end-13 row-start-1 row-end-2 self-center font-myUnbounded font-light text-white text-[22px]"
    >
      — это размер шрифта, измеряемый в пунктах (pt).
    </p>
    <p
      class="col-start-1 col-end-5 row-start-2 row-end-4 font-myMedium outline-4 outline-customPurple flex flex-col self-end group"
    >
      <span class="text-[74px] leading-6 text-customPurple group-hover:text-customPurple_o66"
        >кегли</span
      ><span class="text-[55px] text-customPurple_o66 group-hover:text-customPurple">бывают</span
      ><span class="text-[47px] leading-3 text-customPurple group-hover:text-customPurple_o66"
        >разными</span
      >
    </p>
    <div
      class="col-start-6 col-end-13 row-start-2 row-end-5 font-myUnbounded font-light text-white text-[22px] self-center"
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
  <div class="grid grid-cols-12 grid-rows-9 gap-y-[30px] gap-x-[10px] px-[135px] pt-10 mb-20">
    <!-- 1st block  -->
    <div
      class="col-start-1 col-end-5 row-start-1 row-end-2 border-b-4 border-b-white py-4 self-end"
    >
      <p class="text-[11pt] font-myUnbounded font-regular text-white">
        Текст для книги примерно такой
      </p>
    </div>
    <div
      class="col-start-6 col-end-13 row-start-1 row-end-2 border-4 border-customPurple rounded-l-[100px] rounded-tr-[100px] px-10 py-6 flex items-center text-end"
    >
      <p class="text-white text-[22px] font-myUnbounded font-light">
        <span class="text-customPurple">Книги: </span>кегль для текста в книгах обычно составляет
        10-12 pt
      </p>
    </div>
    <!-- 2nd block  -->
    <div
      class="col-start-1 col-end-5 row-start-3 row-end-4 border-b-4 border-b-white py-4 self-end"
    >
      <p class="text-[16px] font-myUnbounded font-regular text-white">
        Текст для веб-сайтов примерно такой
      </p>
    </div>
    <div
      class="col-start-6 col-end-13 row-start-3 row-end-4 border-4 border-customLime rounded-l-[100px] rounded-tr-[100px] px-10 py-6 flex items-center text-end"
    >
      <p class="text-white text-[22px] font-myUnbounded font-light">
        <span class="text-customLime">Веб-сайты: </span>кегль для текста на веб-сайте обычно
        составляет 14-16 pt
      </p>
    </div>
    <!-- 3rd block  -->
    <div
      class="col-start-1 col-end-5 row-start-5 row-end-6 border-b-4 border-b-white py-4 self-end"
    >
      <p class="text-[25px] font-myUnbounded font-regular text-white">
        Текст для заголовка примерно такой
      </p>
    </div>
    <div
      class="col-start-6 col-end-13 row-start-5 row-end-6 border-4 border-customPurple rounded-l-[100px] rounded-tr-[100px] px-10 py-6 flex items-center text-end"
    >
      <p class="text-white text-[22px] font-myUnbounded font-light">
        <span class="text-customPurple">Заголовки: </span>кегль для заголовков больше: 20-30 pt или
        даже больше 10-12 pt
      </p>
    </div>

    <!-- text block  -->
    <div
      class="col-start-1 col-end-9 row-start-7 row-end-10 font-myUnbounded font-light text-white text-[22px] space-y-7 pr-10"
    >
      <h3 class="text-customLime">Причины, почему работа с кеглем важна:</h3>
      <p>• Правильный кегль делает текст легко читаемым и легким для восприятия;</p>
      <p>• Разный кегль помогает создать иерархию в тексте, выделяя заголовки и важные элементы;</p>
      <p>
        • Использование согласованного кегля во всех элементах дизайна делает его более гармоничным
        и уравновешенным.
      </p>
    </div>

    <button
      class="col-start-9 col-end-13 row-start-7 row-end-8 h-2/3 bg-customOrange text-white text-[22px] font-myUnbounded font-medium rounded-[100px] hover:text-customBlack hover:bg-customLime hover:scale-110"
    >
      где найти шрифты?
    </button>
  </div>
</template>

<script>
export default {
  name: 'SizeBlock'
}
</script>

<style scoped></style>

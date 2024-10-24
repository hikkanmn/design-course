<script setup></script>

<template>
  <!-- Основной текст и кнопка -->
  <div class="grid grid-cols-12 grid-rows-3 gap-y-[30px] gap-x-[10px] px-[135px] pt-20">
    <h1
      class="font-myMedium uppercase hover:text-[100px] text-[95px] col-start-1 col-end-12 row-start-1 row-end-2 text-white flex justify-between items-center leading-relaxed"
    >
      ресурсы
      <img
        class="h-[75px] w-[75px]"
        src="/src/img/decoration_star_orange.svg"
        alt="Ошибка загрузки изображения! Попробуйте перезагрузить страницу"
      />
    </h1>

    <div class="flex items-center col-start-1 col-end-13 row-start-2 row-end-3">
      <div>
        <p class="font-myUnbounded font-light text-[25px] text-white leading-relaxed">
          Для создания качественного сайта необходимо владеть не только основами дизайна, но и знать
          о доступных ресурсах.
        </p>
      </div>
    </div>

    <div class="border-t-4 border-customLime col-start-1 col-end-13 row-start-3 row-end-4"></div>
  </div>
  <div class="bg-customPurple rounded-r-[100px] h-[80px] mr-[825px] mb-40"></div>
</template>

<script>
export default {
  name: 'ResourcesIntroSection'
}
</script>

<style scoped></style>

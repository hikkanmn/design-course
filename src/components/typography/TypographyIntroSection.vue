<script setup></script>

<template>
  <div
    class="grid grid-cols-12 grid-rows-2 gap-y-[30px] gap-x-[10px] px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] pt-32 md:pt-14 mb-20"
  >
    <h1
      class="font-myMedium uppercase text-[100px] lg:text-[80px] md:text-[60px] sm:text-[45px] xs:text-[35px] text-end col-start-1 col-end-13 row-start-1 row-end-2 text-white leading-relaxed"
    >
      <span class="hover:tracking-widest">т</span
      ><span class="font-myPlayfairDisplay hover:tracking-widest lowercase">и</span
      ><span class="hover:tracking-widest">п</span><span class="hover:tracking-widest">о</span
      ><span class="font-myPacifico hover:tracking-widest lowercase">г</span
      ><span class="hover:tracking-widest">р</span><span class="hover:tracking-widest">а</span
      ><span class="font-myIBMPlexMono lowercase hover:tracking-widest">ф</span
      ><span class="hover:tracking-widest">и</span
      ><span class="font-myCaveat hover:tracking-widest">к</span
      ><span class="hover:tracking-widest">а</span>
    </h1>

    <div class="flex items-center col-start-1 col-end-13 row-start-2 row-end-3">
      <div class="mb-10">
        <p
          class="font-myUnbounded font-light text-[25px] md:text-[22px] sm:text-[18px] xs:text-[14px] text-white leading-relaxed"
        >
          <span class="text-customLime hover:text-customOrange">Типографика </span>
          — это искусство использования шрифтов для создания визуального образа и передачи
          информации.
        </p>
      </div>
    </div>
    <div class="col-start-1 col-end-13 row-start-2 row-end-3 border-b-4 border-customLime"></div>
  </div>
</template>

<script>
export default {
  name: 'TypographyIntroSection'
}
</script>

<style scoped></style>

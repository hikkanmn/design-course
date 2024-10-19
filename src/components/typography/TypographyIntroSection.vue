<script setup></script>

<template>
  <div class="grid grid-cols-12 grid-rows-2 gap-y-[30px] gap-x-[10px] px-[135px] pt-32 mb-20">
    <h1
      class="font-myMedium uppercase text-[100px] text-end col-start-1 col-end-13 row-start-1 row-end-2 text-white hover:text-customOrange leading-relaxed transition-all transform duration-500 ease-in-out"
    >
      т<span class="playfair-display lowercase">и</span>по<span class="pacifico-regular lowercase"
        >г</span
      >ра<span class="ibm-plex-mono-medium lowercase">ф</span>и<span class="caveat-medium">к</span>а
    </h1>

    <div class="flex items-center col-start-1 col-end-13 row-start-2 row-end-3">
      <div>
        <p class="font-myUnbounded font-light text-[25px] text-white leading-relaxed">
          <span
            class="text-customLime hover:text-customOrange transition-all transform duration-500 ease-in-out"
            >Типографика
          </span>
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

<style scoped>
.playfair-display {
  font-family: 'myPlayfairDisplay';
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

.pacifico-regular {
  font-family: 'myPacifico';
  font-weight: 400;
  font-style: normal;
}

.ibm-plex-mono-medium {
  font-family: 'myIBMPlexMono';
  font-weight: 500;
  font-style: normal;
}

.caveat-medium {
  font-family: 'myCaveat';
  font-weight: 400;
  font-style: normal;
}
</style>

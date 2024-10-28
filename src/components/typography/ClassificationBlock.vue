<script setup></script>

<template>
  <div class="mr-[135px] bg-customPurple rounded-r-[100px] h-[40px]"></div>
  <div class="grid grid-cols-12 grid-rows-2 gap-y-[30px] gap-x-[10px] px-[135px] mb-20 mt-10">
    <div
      class="col-start col-end-2 row-start-1 row-end-2 group hover:bg-customOrange bg-customLime rounded-[60px] px-12 py-2 flex items-center justify-center"
    >
      <span class="font-myUnbounded font-bold text-customBlack text-[55px] group-hover:text-white"
        >3</span
      >
    </div>
    <h2
      class="col-start-3 col-end-6 row-start-1 row-end-2 self-center font-myMedium text-white text-[52px]"
    >
      классификация
    </h2>
    <p
      class="col-start-1 col-end-13 row-start-2 row-end-3 self-center font-myUnbounded font-light text-white text-[22px]"
    >
      — шрифты, как и люди, бывают разными: с характером, с историей, с особенными чертами. Их
      классифицируют по стилю, характеру и начертанию, чтобы дизайнеры могли легко ориентироваться в
      их многообразии.
    </p>
  </div>
  <div class="grid grid-cols-12 grid-rows-12 gap-y-[30px] gap-x-[10px] px-[135px] mb-40">
    <h3
      class="text-customLime col-start-1 col-end-8 row-start-1 row-end-2 font-myUnbounded font-light text-[22px] self-center"
    >
      Типы шрифтов:
    </h3>
    <!-- 1st font type -->
    <p
      class="col-start-1 col-end-8 row-start-2 row-end-3 text-white text-[22px] font-myUnbounded font-light self-center"
    >
      <span class="text-customOrange">Гротески: </span>современные шрифты без засечек. Чистые,
      простые и динамичные. Используются для веб-дизайна, современного брендинга.
    </p>
    <img
      class="col-start-8 col-end-9 row-start-2 row-end-3 self-center"
      src="/src/img/decoration_star_lime.svg"
      alt="Ошибка загрузки изображения! Попробуйте перезагрузить странцу"
    />
    <div
      class="col-start-9 col-end-13 row-start-2 row-end-3 hover:bg-opacity-10 border-4 border-customPurple bg-customPurple rounded-l-[100px] rounded-tr-[100px] px-10 py-4 flex items-center justify-end"
    >
      <p class="text-white text-[40px] font-myPhudu">Пример шрифта</p>
    </div>

    <!-- 2nd font block  -->
    <p
      class="col-start-1 col-end-8 row-start-4 row-end-5 text-white text-[22px] font-myUnbounded font-light self-center"
    >
      <span class="text-customOrange">Акцидентные: </span>шрифты с острыми углами, ярким характером,
      часто используются в рекламе и дизайне плакатов.
    </p>
    <div
      class="col-start-8 col-end-13 row-start-4 row-end-5 group hover:bg-opacity-10 border-4 border-customLime bg-customLime rounded-l-[100px] rounded-tr-[100px] px-10 py-4 flex items-center justify-end"
    >
      <p class="text-customBlack text-[45px] font-mySoledago group-hover:text-white">
        Пример шрифта
      </p>
    </div>

    <!-- 3rd font type -->
    <p
      class="col-start-1 col-end-8 row-start-6 row-end-7 text-white text-[22px] font-myUnbounded font-light self-center"
    >
      <span class="text-customOrange">Текстовые: </span>шрифты, предназначенные для больших объемов
      текста. Они обычно имеют засечки и хорошую читаемость.
    </p>
    <img
      class="col-start-8 col-end-9 row-start-6 row-end-7 self-center"
      src="/src/img/decoration_star_lime.svg"
      alt="Ошибка загрузки изображения! Попробуйте перезагрузить странцу"
    />
    <div
      class="col-start-9 col-end-13 row-start-6 row-end-7 hover:bg-opacity-10 border-4 border-customPurple bg-customPurple rounded-l-[100px] rounded-tr-[100px] px-10 py-4 flex items-center justify-end"
    >
      <p class="text-white text-[40px] font-myAlice">Пример шрифта</p>
    </div>

    <!-- 4th font block  -->
    <p
      class="col-start-1 col-end-8 row-start-8 row-end-9 text-white text-[22px] font-myUnbounded font-light self-center"
    >
      <span class="text-customOrange">Антиквы: </span>классические шрифты с засечками, отличаются
      элегантностью и формальностью. Используются для книг, журналов, официальных документов.
    </p>
    <div
      class="col-start-8 col-end-13 row-start-8 row-end-9 group hover:bg-opacity-10 border-4 border-customLime bg-customLime rounded-l-[100px] rounded-tr-[100px] px-10 py-4 flex items-center justify-end"
    >
      <p class="text-customBlack text-[40px] font-myVollkornSC group-hover:text-white">
        Пример шрифта
      </p>
    </div>

    <!-- 5th font type -->
    <p
      class="col-start-1 col-end-8 row-start-10 row-end-11 text-white text-[22px] font-myUnbounded font-light self-center"
    >
      <span class="text-customOrange">Брусковые: </span>шрифты с прямыми линиями и резкими
      переходами. Используются для создания строгого и контрастного визуального эффекта.
    </p>
    <img
      class="col-start-8 col-end-9 row-start-10 row-end-11 self-center"
      src="/src/img/decoration_star_lime.svg"
      alt="Ошибка загрузки изображения! Попробуйте перезагрузить странцу"
    />
    <div
      class="col-start-9 col-end-13 row-start-10 row-end-11 hover:bg-opacity-10 border-4 border-customPurple bg-customPurple rounded-l-[100px] rounded-tr-[100px] px-10 py-4 flex items-center justify-end"
    >
      <p class="text-white text-[40px] font-myBravoSC">Пример шрифта</p>
    </div>

    <!-- 6th font block  -->
    <p
      class="col-start-1 col-end-8 row-start-12 row-end-13 text-white text-[22px] font-myUnbounded font-light self-center"
    >
      <span class="text-customOrange">Рукописные: </span>шрифты имитируют письмо от руки и таким
      образом персонализируют текст.
    </p>
    <div
      class="col-start-8 col-end-13 row-start-12 row-end-13 group hover:bg-opacity-10 border-4 border-customLime bg-customLime rounded-l-[100px] rounded-tr-[100px] px-10 py-4 flex items-center justify-end"
    >
      <p class="text-customBlack text-[40px] font-myStampatelloFaceto group-hover:text-white">
        Пример шрифта
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassificationBlock'
}
</script>

<style scoped></style>

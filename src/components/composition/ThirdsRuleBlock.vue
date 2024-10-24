<script setup></script>

<template>
  <!-- Текст "начинается с основ" -->
  <div
    class="pr-16 py-2 bg-customPurple hover:bg-opacity-50 hover:border-r-4 hover:border-white rounded-r-full pl-[135px] mr-[135px] my-20 text-white flex justify-between items-center"
  >
    <p class="text-[65px] font-myMedium">правило третей</p>
    <span class="font-myUnbounded font-medium text-[65px]">6</span>
  </div>
  <div class="grid grid-cols-12 grid-rows-9 gap-y-[30px] gap-x-[10px] px-[135px]">
    <p
      class="col-start-1 col-end-13 row-start-1 row-end-2 text-white font-myUnbounded font-light text-[22px]"
    >
      <span class="text-customLime">Правило третей </span> — это принцип композиции, который делит
      площадку дизайна на три равные части по горизонтали и вертикали, создавая девять квадратов.
    </p>
    <div class="col-start-1 col-end-3 row-start-2 row-end-5">
      <img
        class="col-start-1 col-end-3 row-start-2 row-end-5 w-[160px] h-[300px] hover:scale-90"
        src="/src/img/thirds_rule_group_1.svg"
        alt="Ошибка загрузки изображения! Перезагрузите страницу"
      />
    </div>

    <div
      class="col-start-3 col-end-13 row-start-2 row-end-5 border-4 hover:bg-white hover:bg-opacity-10 border-white rounded-bl-[60px] rounded-tl-[60px] rounded-tr-[60px] flex flex-col justify-center items-center py-4 pr-16 pl-16 gap-8"
    >
      <p class="font-myUnbounded text-white font-light text-[22px]">
        Четыре точки пересечения линий сетки считаются
        <span class="text-customOrange"> "сильными точками" </span>, которые привлекают внимание
        зрителя.
      </p>
      <p class="font-myUnbounded text-white font-light text-[22px]">
        Размещение ключевых элементов дизайна (например, главного объекта, заголовка) в одной из
        точек пересечения делает их более заметными и привлекательными.
      </p>
    </div>
    <div
      class="col-start-1 col-end-10 row-start-5 row-end-7 border-4 hover:bg-white hover:bg-opacity-10 border-white rounded-br-[60px] rounded-tl-[60px] rounded-tr-[60px] flex flex-col justify-center items-center py-4 pr-16 pl-16 gap-8"
    >
      <p class="font-myUnbounded text-white font-light text-[22px]">
        Вместо того, чтобы размещать главный объект в точке пересечения, также можно
        <span class="text-customOrange"> заполнить </span> одну из
        <span class="text-customOrange"> ячеек </span> изображением или текстом главного элемента.
      </p>
    </div>
    <div class="col-start-10 col-end-13 row-start-5 row-end-9 flex justify-end">
      <img
        class="w-[245px] h-[415px] hover:scale-90"
        src="/src/img/thirds_rule_group_2.svg"
        alt="Ошибка загрузки изображения! Перезагрузите страницу"
      />
    </div>
    <div
      class="col-start-1 col-end-10 row-start-7 row-end-9 text-white font-myUnbounded font-light text-[22px] flex flex-col justify-end"
    >
      <h3 class="text-customLime mb-6">Преимущества использования правила третей:</h3>
      <p>• Делает дизайн более уравновешенным и гармоничным.</p>
      <p>• Привлекает внимание к важным элементам дизайна.</p>
      <p>• Создает ощущение движения и интереса в композиции.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThirdsRuleBlock'
}
</script>

<style scoped>
/* Стили для страницы "Композиция" */
</style>

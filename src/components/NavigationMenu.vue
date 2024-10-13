<script setup>
import MenuLink from '/src/components/MenuLink.vue'
</script>

<template>
  <header class="flex justify-center">
    <nav class="px-[135px] py-[50px] w-full">
      <div class="flex justify-between items-center">
        <!-- Главная страница -->
        <MenuLink
          text="главная страница"
          class="bg-customPurple text-white hover:bg-customLime hover:text-customBlack transition-all duration-300"
        />
        <!-- Ссылки меню -->
        <div class="space-x-[28px]">
          <MenuLink
            text="разделы курса"
            class="bg-customLime text-customBlack hover:bg-customOrange hover:text-white transition-all duration-300"
          />
          <MenuLink
            text="ресурсы"
            class="bg-customLime text-customBlack hover:bg-customOrange hover:text-white transition-all duration-300"
          />
          <MenuLink
            text="галерея"
            class="bg-customLime text-customBlack hover:bg-customOrange hover:text-white transition-all duration-300"
          />
          <MenuLink
            text="контакты"
            class="bg-customLime text-customBlack hover:bg-customOrange hover:text-white transition-all duration-300"
          />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  components: {
    MenuLink
  }
}
</script>

<style scoped>
/* Стили, если нужно */
</style>

<script setup>
import MenuLink from '/src/components/MenuLink.vue'
</script>

<template>
  <header class="flex justify-center">
    <nav class="px-[135px] py-[50px] w-full flex justify-between items-center">
      <!-- Главная страница -->
      <MenuLink
        text="главная страница"
        bgColor="bg-customPurple text-white hover:bg-customLime hover:text-customBlack transition-all transform duration-500 ease-in-out"
        to="/"
      />

      <!-- Ссылки меню -->
      <div class="space-x-[28px]">
        <MenuLink
          text="композиция"
          bgColor="bg-customLime text-customBlack hover:bg-customOrange hover:text-white transition-all transform duration-500 ease-in-out"
          to="/composition"
        />
        <MenuLink
          text="колористика"
          bgColor="bg-customLime text-customBlack hover:bg-customOrange hover:text-white transition-all transform duration-500 ease-in-out"
          to="/color"
        />
        <MenuLink
          text="типографика"
          bgColor="bg-customLime text-customBlack hover:bg-customOrange hover:text-white transition-all transform duration-500 ease-in-out"
          to="/typography"
        />
        <MenuLink
          text="ресурсы"
          bgColor="bg-customLime text-customBlack hover:bg-customOrange hover:text-white transition-all transform duration-500 ease-in-out"
          to="/resources"
        />
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

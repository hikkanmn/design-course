<script setup>
import MenuLink from '/src/components/MenuLink.vue'
</script>

<template>
  <header class="flex justify-center">
    <div
      class="px-[135px] lg:px-[100px] md:px-[50px] sm:px-[20px] py-[50px] md:py-[30px] xs:py-[15px] w-full flex justify-between items-center"
    >
      <!-- Главная страница -->
      <MenuLink
        title="переход на Главную страницу"
        text="главная"
        bgColor="bg-customPurple text-white hover:bg-customLime hover:text-customBlack "
        to="/"
      />

      <!-- Ссылки меню -->
      <nav class="space-x-6 md:space-x-4 sm:hidden">
        <MenuLink
          title="переход к разделу Копмозиция"
          text="композиция"
          bgColor="bg-customLime text-customBlack hover:bg-customOrange hover:text-white "
          to="/composition"
        />
        <MenuLink
          title="переход к разделу Колористика"
          text="колористика"
          bgColor="bg-customLime text-customBlack hover:bg-customOrange hover:text-white "
          to="/color"
        />
        <MenuLink
          title="переход к разделу Типографика"
          text="типографика"
          bgColor="bg-customLime text-customBlack hover:bg-customOrange hover:text-white "
          to="/typography"
        />
        <MenuLink
          title="переход к разделу Ресурсы"
          text="ресурсы"
          bgColor="bg-customLime text-customBlack hover:bg-customOrange hover:text-white "
          to="/resources"
        />
      </nav>

      <!-- mobile menu -->
      <nav
        id="mobileMenu"
        v-if="isMenuOpen"
        class="fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center backdrop-blur h-screen"
      >
        <div class="flex flex-col space-y-12">
          <MenuLink
            title="переход на Главную страницу"
            text="главная"
            bgColor="bg-customPurple text-white hover:bg-customLime hover:text-customBlack "
            to="/"
          />
          <MenuLink
            title="переход к разделу Копмозиция"
            text="композиция"
            bgColor="bg-customLime text-customBlack hover:bg-customOrange hover:text-white "
            to="/composition"
          />
          <MenuLink
            title="переход к разделу Колористика"
            text="колористика"
            bgColor="bg-customLime text-customBlack hover:bg-customOrange hover:text-white "
            to="/color"
          />
          <MenuLink
            title="переход к разделу Типографика"
            text="типографика"
            bgColor="bg-customLime text-customBlack hover:bg-customOrange hover:text-white "
            to="/typography"
          />
          <MenuLink
            title="переход к разделу Ресурсы"
            text="ресурсы"
            bgColor="bg-customLime text-customBlack hover:bg-customOrange hover:text-white "
            to="/resources"
          />
        </div>
      </nav>
      <!-- бургер для мобильного меню  -->
      <button @click="toggleMenu" class="group relative h-5 w-[30px] hidden sm:block">
        <span
          :class="{
            'translate-y-2 rotate-45': isMenuOpen
          }"
          class="absolute left-0 bg-white h-[2px] w-full top-0 transition-transform duration-500"
        >
        </span>
        <span
          :class="{
            'opacity-0': isMenuOpen
          }"
          class="absolute left-0 bg-white h-[2px] w-full top-1/2 transition-opacity duration-500"
        >
        </span>
        <span
          :class="{
            '-translate-y-[11px] -rotate-45': isMenuOpen
          }"
          class="absolute left-0 bg-white h-[2px] w-full bottom-0 transition-transform duration-500"
        >
        </span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  components: {
    MenuLink
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.classList.toggle('overflow-hidden', this.isMenuOpen)
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && this.isMenuOpen) {
          this.isMenuOpen = false
        }
      })
    }
  }
}
</script>

<style scoped>
/* Стили, если нужно */
</style>

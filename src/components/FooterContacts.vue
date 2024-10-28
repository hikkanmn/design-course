<script setup>
import ContactCard from '/src/components/ContactCard.vue'
</script>

<template>
  <footer
    class="flex sm:flex-col sm:gap-10 justify-between px-[135px] lg:px-[100px] md:px-[50px] sm:px-0 md:mb-20"
  >
    <!-- Карточка 1 -->
    <ContactCard
      name="Варвара Дорошенко"
      email="varvaradorosh@mail.ru"
      lineColor="border-customPurple"
    />
    <!-- Карточка 2 -->
    <ContactCard
      name="Виктория Абрамова"
      email="abramovava.infom@gmail.com"
      lineColor="border-customLime"
    />
    <!-- Карточка 3 -->
    <ContactCard
      name="Татьяна Коновалова"
      email="tanyshkaaa1506@gmail.com"
      lineColor="border-customPurple"
    />
  </footer>
</template>

<script>
export default {
  name: 'FooterContacts',
  components: {
    ContactCard
  }
}
</script>

<style scoped>
/* Можно добавить свои стили, если необходимо */
</style>

<script setup>
import ContactCard from '/src/components/ContactCard.vue'
</script>

<template>
  <footer class="flex justify-between items-center px-[135px]">
    <!-- Карточка 1 -->
    <ContactCard
      name="Варя Дорошенко"
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

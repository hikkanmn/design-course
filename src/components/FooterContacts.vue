<script setup>
import ContactCard from '/src/components/ContactCard.vue'
</script>

<template>
  <div class="flex justify-between items-center pt-[105px] px-[135px]">
    <!-- Карточка 1 -->
    <ContactCard
      name="Варя Дорошенко"
      email="varvaradorosh@mail.ru"
      lineColor="border-indigo-600"
    />
    <!-- Карточка 2 -->
    <ContactCard
      name="Виктория Абрамова"
      email="abramovava.infom@gmail.com"
      lineColor="border-lime-400"
    />
    <!-- Карточка 3 -->
    <ContactCard
      name="Татьяна Коновалова"
      email="varvaradorosh@mail.ru"
      lineColor="border-indigo-600"
    />
  </div>
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

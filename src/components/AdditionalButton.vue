<template>
  <div class="col-start-1 col-end-7 row-start-10 row-span-1 flex justify-center items-center">
    <button
      class="lowercase font-myUnbounded font-regular text-[25px] bg-customOrange text-white px-8 py-3 rounded-full shadow-lg hover:bg-orange-400 flex items-center"
    >
      дополнительные материалы
      <span class="ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AdditionalButton'
}
</script>

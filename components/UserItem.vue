<script setup>
const name = ref("Guilherme Chaves");
const description = ref("Software Engineer");
</script>

<template>
  <div class="m-2 p-2 flex items-center justify-start gap-2 border rounded cursor-pointer hover:bg-neutral-50 transition">
    <div class="rounded-full w-10 h-10 bg-green-500 flex items-center justify-center font-bold text-white">{{ name[0] }}</div>
    <div>
      <p class="text-sm font-bold text-black mb-0 leading-1">{{ name }}</p>
      <p class="m-0">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped></style>

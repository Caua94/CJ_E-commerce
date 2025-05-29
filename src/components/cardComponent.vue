<template>
  <div
    class="p-4 text-black shadow-md bg-red-100 hover:bg-gray-200 w-[250px] h-[400px] mx-auto flex flex-col items-center justify-center font-serif"
  >
    <img
      v-if="product.images.length"
      :src="product.images[0]"
      :alt="product.title"
      id="product-image"
      class="mx-auto mb-4 h-40 object-contain"
    />
    <h2 class="text-2xl capitalize text-center">{{ product.title || 'Carregando...' }}</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const product = ref({ images: [], title: "" });

onMounted(async () => {
  try {
    const res = await fetch("https://dummyjson.com/products/5");
    const data = await res.json();
    product.value = data;
  } catch (err) {
    console.error(err);
  }
});
</script>

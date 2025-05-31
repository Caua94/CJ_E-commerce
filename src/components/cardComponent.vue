<template>
    <div
      v-for="prod in products"
      :key="prod.id"
      class="transition-all duration-500 ease-in-out p-4 text-[#3E4A4F] shadow-md cursor-pointer bg-[#F1F0E8] hover:bg-[#D6D4CB] w-[400px] h-[400px] mx-auto flex flex-col items-center justify-center rounded-[100px]"
      :style="{ fontFamily: 'var(--font-mont)' }"
    >
      <img
        v-if="prod.images && prod.images.length"
        :src="prod.images[0]"
        :alt="prod.category"
        class="mx-auto mb-4 h-40 object-contain"
      />
      <h2 class="text-2xl pt-16 capitalize text-center font-bold">{{ prod.category || 'Carregando...' }}</h2>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const products = ref([]);

async function fetchProductById(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(`Erro ao buscar produto id=${id}:`, err);
  }
}

onMounted(async () => {
  const ids = [1, 6, 11, 16, 43, 48, 78, 83, 88, 93, 99, 113, 118, 121, 137, 154, 159, 162, 167, 172, 177, 182, 185, 190];
  const prods = [];

  for (const id of ids) {
    const product = await fetchProductById(id);
    if (product) prods.push(product);
  }

  products.value = prods;
});
</script>

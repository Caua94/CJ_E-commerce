<template>
    <div class="flex justify-center gap-6">
      <router-link
        v-for="prod in products"
        :key="prod.id"
        :to="`/product?category=${prod.category}`"
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
      </router-link>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios'

const products = ref([]);

async function fetchProductById(id) {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    return res.data;
  } catch (err) {
    console.error(`Erro ao buscar produto id=${id}:`, err);
  }
}

onMounted(async () => {
  const ids = [1, 6, 11, 16, 43, 48, 78, 83, 88, 93, 99, 113, 118, 121, 137, 154, 159, 162, 167, 172, 177, 182, 185, 190];
  const produtos = [];

  for (const id of ids) { // Para cada valor dentro do array ids, pegue esse valor e chame de id
    const produto = await fetchProductById(id)
    if (produto) {
      produtos.push(produto) // add na lista produtos
    }
  }

  products.value = produtos;
});
</script>

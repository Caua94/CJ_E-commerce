<template>
  <div>
    <h1 class="mb-6 text-2xl font-bold">Todos os Produtos</h1>
    <div class="grid grid-cols-4 gap-6">
      <div v-for="prod in products" :key="prod.id" class="border p-4 rounded shadow hover:shadow-lg transition">
        <img v-if="prod.images && prod.images.length" :src="prod.images[0]" :alt="prod.title"
          class="mb-4 h-40 w-full object-contain" />
        <h2 class="text-lg font-semibold">{{ prod.title }}</h2>
        <p class="mt-2 text-sm text-gray-600">{{ prod.description }}</p>
        <p class="mt-2 font-bold">R$ {{ prod.price }}</p>
      </div>
    </div>
  </div>
  <div class="pagination">
    <button @click="prev">Anterior</button>
    <button @click="next">Próximo</button>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'

const products = ref([])

let page = 1
const limit = 10

async function fetchAllProducts() {
  const skip = (page - 1) * limit
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
  const data = await res.json()
  products.value = data.products
}

onMounted(() => {
  fetchAllProducts()
})

function next() {
    page++;
    fetchAllProducts();
}

function prev() {
    if (page > 1) {
        page--;
        fetchAllProduct();
    }
}
</script>

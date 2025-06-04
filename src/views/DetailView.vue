<template>
  <div class="h-screen bg-[white] text-[#3E4A4F] content-center" :style="{ fontFamily: 'var(--font-mont)' }">

    <div v-if="product" class="max-w-6xl mx-auto rounded-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <img
        :src="product.images?.[0]"
        :alt="product.title"
        class="w-full object-contain max-h-[800px] rounded-xl border"
      />
      <div>
        <h1 class="text-4xl font-bold mb-2">{{ product.title }}</h1>
        <p class="text-lg capitalize mb-1 text-gray-600">{{ product.category }}</p>
        <p class="text-lg capitalize mb-1 text-gray-600">{{ product.brand }}</p>
        <p class="text-2xl text-green-700 font-semibold mb-4">$ {{ product.price }}</p>
        <p class="text-2xl text-gray-800 pt-12 ">{{ product.description }}</p>
        <p class="text-sm text-gray-500">Estoque: {{ product.stock }}</p>
        <p class="text-sm ">Avaliação: {{ product.rating }} </p>
        <button class="text-2xl text-white bg-gray-600 hover:bg-gray-500 rounded-2xl p-2 mt-20">Add to cart</button>
      </div>
    </div>

    <div v-else class="text-center text-xl mt-12">
      Carregando produto...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  try {
    const { data } = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
    product.value = data
  } catch (err) {
    console.error('Erro ao carregar produto:', err)
  }
})
</script>

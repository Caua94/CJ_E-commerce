<template>
  <div class="text-[#3E4A4F]" :style="{ fontFamily: 'var(--font-mont)' }">
    <main
      class="relative shadow-4xl group w-screen h-[500px] hover:bg-black transition duration-700 ease-in-out shadow-xl flex flex-col items-center justify-center  bg-[url(../assets/img/fundoSacola.png)] bg-black bg-cover bg-center bg-no-repeat ">
      <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-700 ease-in-out z-0">
      </div>

      <div class="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 class="text-border text-8xl text-border text-center text-[white] font-extralight "
          :style="{ fontFamily: 'var(--font-dianora)' }">Products</h1>


      </div>
    </main>


    <div class="flex justify-between items-center text-xl lg:text-xl mt-12 border-b h-12 px-12 w-full">

      <div class="group inline-block">
        <div class="flex gap-4">
          <p class="opacity-75">filter products:</p>
          <router-link to="/product" class="transition duration-300 ease-in-out hover:scale-105 flex">
            Categories
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="pt-2 size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </router-link>
        </div>

        <div
          class="ml-40 absolute w-[150px] h-[350px] bg-[#F1F0E8] text-[#3E4A4F] shadow-lg flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border mb-24">
          <div class="mx-auto flex flex-col space-y-5 text-lg overflow-y-auto">
            <div class="grid flex-col gap-4 p-2">
              <router-link to="/allProduct" class="hover:text-[#6B8E99] capitalize">All</router-link>
              <router-link v-for="category in categories" :key="category" :to="`/product?category=${category}`"
                class="hover:text-[#6B8E99] capitalize">
                {{ category.replace(' ') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="flex">
        <input v-model="searchQuery" type="text" placeholder="Search products..."
          class="border border-gray-400 rounded-lg px-4 py-1 w-[250px]" />
      </div>

      <div class="flex ">
        <label for="sort" class="mr-4 text-lg opacity-75">Ordenar por:</label>
        <select id="sort" v-model="sortOption" class="border rounded-lg px-2 py-1 text-[#3E4A4F]">
          <option value="">Padrão</option>
          <option value="title-asc">Nome A-Z</option>
          <option value="title-desc">Nome Z-A</option>
          <option value="price-asc">Menor preço</option>
          <option value="price-desc">Maior preço</option>
        </select>
      </div>

    </div>

    <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 space-y-2 pl-24 pr-24 pb-4 ">
      <div v-for="prod in sortedProducts" :key="prod.id"
        class="p-4 text-[#3E4A4F] w-[340px] h-[400px] mx-auto flex flex-col items-center justify-center border pl-6 pr-6">
        <img v-if="prod.images && prod.images.length" :src="prod.images[0]" :alt="prod.title"
          class="mx-auto mb-4 h-40 object-contain" />
        <h2 class="text-xl text-center font-bold">{{ prod.title }}</h2>
        <p class="text-sm text-center mt-2 capitalize">{{ prod.category }}</p>
        <p class="text-lg font-semibold mt-1 text-green-600">$ {{ prod.price }}</p>
      </div>
    </div>

    <div class="pagination flex justify-end space-x-8 pr-4 mr-24 mb-12">
      <button class="cursor-pointer bg-[#3E4A4F] hover:bg-sky-950 p-4 rounded-xl text-white text-2xl"
        @click="prev">Anterior</button>
      <button class="cursor-pointer bg-[#3E4A4F] hover:bg-sky-950 p-4 rounded-xl text-white text-2xl"
        @click="next">Próximo</button>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, watch,computed } from 'vue'

const products = ref([])
const categories = ref([])
const searchQuery = ref('')

let page = 1
const limit = 20
let debounceTimeout = null


async function fetchAllProducts() {
  const skip = (page - 1) * limit
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
  const data = await res.json()
  products.value = data.products
}


async function searchProducts(query) {
  if (query.trim() === '') {
    fetchAllProducts()
    return
  }

  try {
    const res = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`)
    const data = await res.json()
    products.value = data.products
  } catch (err) {
    console.error('Erro na busca:', err)
  }
}


function next() {
  page++
  fetchAllProducts()
}

function prev() {
  if (page > 1) {
    page--
    fetchAllProducts()
  }
}

watch(searchQuery, (newQuery) => {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    searchProducts(newQuery)
  }, 500)
})

onMounted(async () => {
  fetchAllProducts()

  try {
    const res = await fetch('https://dummyjson.com/products/category-list')
    const data = await res.json()
    categories.value = data
  } catch (error) {
    console.error('Erro ao carregar categorias:', error)
  }
})

const sortOption = ref('') // opções: 'title-asc', 'title-desc', 'price-asc', 'price-desc'

const sortedProducts = computed(() => {
  const sorted = [...products.value]

  switch (sortOption.value) {
    case 'title-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title))
    case 'title-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title))
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    default:
      return sorted
  }
})



</script>

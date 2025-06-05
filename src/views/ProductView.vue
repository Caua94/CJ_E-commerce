<template>
  <!-- Container principal com cor de texto e fonte customizada -->
  <div class="text-[#3E4A4F]" :style="{ fontFamily: 'var(--font-mont)' }">

    <!-- Hero principal da página com imagem de fundo e efeito hover -->
    <main
      class="relative shadow-4xl group w-screen h-[500px] sm:h-[400px] md:h-[500px] hover:bg-black transition duration-700 ease-in-out shadow-xl flex flex-col items-center justify-center bg-[url(../assets/img/fundoSacola.png)] bg-black bg-cover bg-center bg-no-repeat">

      <!-- Camada escura aparece com hover -->
      <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-700 ease-in-out z-0"></div>

      <!-- Título centralizado no hero -->
      <div class="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <h1 class="text-border text-5xl sm:text-7xl md:text-8xl text-center text-white font-extralight"
          :style="{ fontFamily: 'var(--font-dianora)' }">Products</h1>
      </div>
    </main>

    <!-- Barra de filtros: categoria, busca e ordenação -->
    <div
      class="flex flex-col sm:flex-row justify-between items-center text-xl mt-6 sm:mt-12 border-b h-auto sm:h-12 px-4 sm:px-12 w-full gap-4 sm:gap-0">

      <!-- Filtro por categoria -->
      <div class="group inline-block relative w-full sm:w-auto">
        <div class="flex items-center gap-4">
          <p class="opacity-75 whitespace-nowrap">filter products:</p>

          <!-- Link principal para a página de categorias -->
          <router-link to="/product" class="transition duration-300 ease-in-out hover:scale-105 flex items-center">
            Categories
            <!-- Ícone da seta -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="pt-2 size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </router-link>
        </div>

        <!-- Dropdown com lista de categorias -->
        <div
          class="absolute top-full left-0 w-[150px] max-h-[350px] bg-[#F1F0E8] text-[#3E4A4F] shadow-lg flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border overflow-y-auto mt-2 sm:mt-0">
          <div class="mx-auto flex flex-col space-y-5 text-lg p-2">
            <div class="flex flex-col gap-4">
              <!-- Link para mostrar todos os produtos -->
              <router-link to="/product?category=all" class="hover:text-[#6B8E99] capitalize">All</router-link>

              <!-- Lista dinâmica de categorias -->
              <router-link v-for="category in categories" :key="category" :to="`/product?category=${category}`"
                class="hover:text-[#6B8E99] capitalize">
                {{ category.replace(' ') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Campo de busca -->
      <div class="w-full sm:w-auto">
        <input v-model="searchQuery" type="text" placeholder="Search products..."
          class="border border-gray-400 rounded-lg px-4 py-1 w-full sm:w-[250px]" />
      </div>

      <!-- Dropdown de ordenação -->
      <div class="flex items-center w-full sm:w-auto">
        <label for="sort" class="mr-4 text-lg opacity-75 whitespace-nowrap">Ordenar por:</label>
        <select id="sort" v-model="sortOption" class="border rounded-lg px-2 py-1 text-[#3E4A4F] w-full sm:w-auto">
          <option value="">Padrão</option>
          <option value="title-asc">Nome A-Z</option>
          <option value="title-desc">Nome Z-A</option>
          <option value="price-asc">Menor preço</option>
          <option value="price-desc">Maior preço</option>
        </select>
      </div>
    </div>

    <!-- Grid de exibição de produtos -->
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-12 pb-8 justify-items-center">
      <router-link v-for="prod in products" :key="prod.id" :to="`/detail/${prod.id}`"
        class="flex p-4 text-[#3E4A4F] w-full max-w-[340px] h-[400px] flex-col items-center justify-center border rounded-xl shadow-sm hover:shadow-md transition">
        <!-- Imagem do produto -->
        <img v-if="prod.images && prod.images.length" :src="prod.images[0]" :alt="prod.title"
          class="mx-auto mb-4 h-40 object-contain" />
        <!-- Título e categoria -->
        <h2 class="text-xl text-center font-bold">{{ prod.title }}</h2>
        <p class="text-sm text-center mt-2 capitalize">{{ prod.category }}</p>
        <!-- Preço -->
        <p class="text-lg font-semibold mt-1 text-green-600">$ {{ prod.price }}</p>
      </router-link>
    </div>

    <!-- Botões de paginação -->
    <div
      class="pagination flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-8 pr-4 sm:pr-24 mb-12 px-4 sm:px-0">
      <button class="cursor-pointer bg-[#3E4A4F] hover:bg-sky-950 p-4 rounded-xl text-white text-2xl"
        @click="prev">Anterior</button>
      <button class="cursor-pointer bg-[#3E4A4F] hover:bg-sky-950 p-4 rounded-xl text-white text-2xl"
        @click="next">Próximo</button>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from "axios"

const route = useRoute()
const products = ref([])
const categories = ref([])
const searchQuery = ref('')
const sortOption = ref('')
let page = 1
const limit = 20
let debounceTimeout = null
const category = ref(route.query.category)

// Helper para extrair sortBy e order da opção selecionada
function parseSortOption(option) {
  switch (option) {
    case 'title-asc':
      return { sortBy: 'title', order: 'asc' }
    case 'title-desc':
      return { sortBy: 'title', order: 'desc' }
    case 'price-asc':
      return { sortBy: 'price', order: 'asc' }
    case 'price-desc':
      return { sortBy: 'price', order: 'desc' }
    default:
      return { sortBy: '', order: '' }
  }
}

// Função para buscar produtos com paginação, categoria, e ordenação na API
async function fetchProducts() {
  const skip = (page - 1) * limit
  const { sortBy, order } = parseSortOption(sortOption.value)

  let url = ''

  // Monta a URL com base na categoria e ordenação
  if (!category.value || category.value === 'all') {
    url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  } else {
    url = `https://dummyjson.com/products/category/${category.value}?limit=${limit}&skip=${skip}`
  }

  // Adiciona ordenação se definida
  if (sortBy && order) {
    url += `&sortBy=${sortBy}&order=${order}`
  }

  const res = await axios.get(url)
  products.value = res.data.products
}

// Busca por pesquisa usando a API (a API não suporta ordenação nessa rota)
async function searchProducts(query) {
  if (query.trim() === '') {
    page = 1
    await fetchProducts()
    return
  }

  const res = await axios.get(`https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`)
  products.value = res.data.products
}

// Avançar página
function next() {
  page++
  if (!searchQuery.value) fetchProducts()
}

// Voltar página
function prev() {
  if (page > 1) {
    page--
    if (!searchQuery.value) fetchProducts()
  }
}

// Observa mudança na categoria da URL
watch(() => route.query.category, (newCategory) => {
  category.value = newCategory
  page = 1
  if (!searchQuery.value) fetchProducts()
})

// Debounce da busca por nome
watch(searchQuery, (newQuery) => {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    searchProducts(newQuery)
  }, 500)
})

// Atualiza listagem ao mudar opção de ordenação (quando não está pesquisando)
watch(sortOption, () => {
  if (!searchQuery.value) fetchProducts()
})

// Inicializa dados
onMounted(async () => {
  await fetchProducts()
  try {
    const res = await axios.get('https://dummyjson.com/products/category-list')
    categories.value = res.data
  } catch (err) {
    console.error('Erro ao carregar categorias:', err)
  }
})
</script>

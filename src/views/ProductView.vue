<template>
  <div class="text-[#3E4A4F]" :style="{ fontFamily: 'var(--font-mont)' }">
    <main
      class="relative shadow-4xl group w-screen h-[500px] hover:bg-black transition duration-700 ease-in-out shadow-xl flex flex-col items-center justify-center  bg-[url(../assets/img/fundoSacola.png)] bg-black bg-cover bg-center bg-no-repeat "
      >
      <div
        class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-700 ease-in-out z-0">
      </div>

      <div class="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 class="text-border text-8xl text-border text-center text-[white] font-extralight "
          :style="{ fontFamily: 'var(--font-dianora)' }">Products</h1>


      </div>
    </main>

    <div class="md:flex-1 flex text-xl lg:text-xl mt-12 border-b h-12 w-full">
      <div class="group inline-block">
        <div class="flex ml-12 gap-8">
          <p class="opacity-75">filter products:</p>
          <router-link to="/product" class=" transition duration-300 ease-in-out hover:scale-105 flex">
            Categories
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="pt-2 size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>


        </router-link>

      </div>

        <div
          class="ml-55 absolute w-[150px] h-[350px] bg-[#F1F0E8] text-[#3E4A4F] shadow-lg flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border mb-24">
          <div class="ml-4 mx-auto flex flex-col space-y-5  text-lg overflow-y-auto">

            <div class="grid flex-col gap-4 p-2">
              <router-link to="/allProduct"
                class="hover:text-[#6B8E99] capitalize">All
              </router-link>
              <router-link v-for="category in categories" :key="category" :to="`/product?category=${category}`"
                class="hover:text-[#6B8E99] capitalize">
                {{ category.replace(' ') }}
              </router-link>


            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 space-y-2 pl-24 pr-24 pb-20 text-lg">
      <div v-for="prod in products" :key="prod.id"
        class="p-4 text-[#3E4A4F] w-[340px] h-[400px] mx-auto flex flex-col items-center justify-center border pl-6 pr-6"
        :style="{ fontFamily: 'var(--font-mont)' }">
        <img v-if="prod.images && prod.images.length" :src="prod.images[0]" :alt="prod.title"
          class="mx-auto mb-4 h-40 object-contain" />
        <h2 class="text-xl text-center font-bold">{{ prod.title }}</h2>
        <p class="text-sm text-center mt-2 capitalize">{{ prod.category }}</p>
        <p class="text-lg font-semibold mt-1 text-green-600">${{ prod.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const products = ref([]);
const category = ref(route.query.category);

async function fetchProductsByCategory(categoryName) {

  const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`);
  const data = await res.json();
  products.value = data.products;

}

watch(() => route.query.category, (newCategory) => {
  category.value = newCategory;
  if (newCategory) {
    fetchProductsByCategory(newCategory);
  }
});

onMounted(() => {
  if (category.value) {
    fetchProductsByCategory(category.value);
  }
});

const categories = ref([])

onMounted(async () => {
  try {
    const res = await fetch('https://dummyjson.com/products/category-list')
    const data = await res.json()
    categories.value = data
  } catch (error) {
    console.error('Erro ao carregar categorias:', error)
  }
})
</script>

<template>
  <div class="top-0 w-screen bg-[#F1F0E8] text-[#3E4A4F] z-50 shadow-3xl " :style="{ fontFamily: 'var(--font-mont)' }">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 h-24 flex items-end py-4 justify-between ">

      <router-link to="/" class="text-3xl font-extrabold">BuyHub</router-link>

      <nav class="ml-8 md:flex-1 flex text-xl lg:text-xl space-x-8">
        <div class="group inline-block">
          <router-link to="/product" class="transition duration-300 ease-in-out hover:scale-105 hover:text-[#6B8E99]">
            Products
          </router-link>
          <div
            class="absolute left-0 mt-4 w-screen h-[350px] bg-[#F1F0E8] text-[#3E4A4F] shadow-lg flex  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t">
            <div class="ml-24 mx-auto flex flex-col space-y-5 pt-6 text-lg">
              <h1 class="opacity-75">Categories</h1>
              <div class="grid grid-flow-col grid-rows-4 gap-4 space-x-24 ">
                <router-link v-for="category in categories" :key="category" :to="`/product?category=${category}`"
                  class="hover:text-[#6B8E99] capitalize">
                  {{ category.replace(' ') }}
                </router-link>

              </div>
            </div>


          </div>

        </div>
        <div class="group inline-block">
          <router-link to="/enterprise" class="transition duration-300 ease-in-out hover:scale-105 hover:text-[#6B8E99]">
            About BuyHub
          </router-link>
          <div
            class="absolute left-0 mt-4 w-screen h-[300px] bg-[#F1F0E8] text-[#3E4A4F] shadow-lg flex  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t">
            <div class="ml-24 mx-auto flex flex-col space-y-5 pt-6 text-lg">
              <h1 class="opacity-75">Topics</h1>
              <div class="grid grid-flow-col grid-rows-4 gap-4 space-x-24">
                <router-link class="hover:text-[#6B8E99]" to="/contact">Contact</router-link>
                <router-link class="hover:text-[#6B8E99]" to="/enterprise">Enterprise</router-link>




              </div>
            </div>


          </div>

        </div>

      </nav>



      <div class="hidden sm:flex gap-4 ">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <router-link class="cursor-pointer text-sm opacity-50 hover:text-[#6B8E99]" to="/contact">Contact</router-link>

      </div>


    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const categories = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('https://dummyjson.com/products/category-list')
    categories.value = res.data
  } catch (error) {
    console.error('Erro ao carregar categorias:', error)
  }
})
</script>

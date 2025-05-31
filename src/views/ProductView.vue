<template>
  <div>
    <h1 class="text-2xl font-bold text-center mb-6 capitalize">Categoria: {{ category }}</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="prod in products"
        :key="prod.id"
        class="p-4 text-[#3E4A4F] shadow-md bg-[#F1F0E8] w-[300px] h-[400px] mx-auto flex flex-col items-center justify-center rounded-[40px]"
        :style="{ fontFamily: 'var(--font-mont)' }"
      >
        <img
          v-if="prod.images && prod.images.length"
          :src="prod.images[0]"
          :alt="prod.title"
          class="mx-auto mb-4 h-40 object-contain"
        />
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
</script>

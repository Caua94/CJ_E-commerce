<template>
  <footer class="bg-[#F1F0E8] text-sm text-[#3E4A4F]  w-screen shadow-2xl" :style="{ fontFamily: 'var(--font-mont)' }">
    <!-- Newsletter Section -->
    <div class="text-center py-10 px-4 border-b border-[#6B8E99]">
      <h2 class="text-xl font-semibold mb-2">BuyHub</h2>
      <p class="text-gray-600">All products of world.</p>

    </div>


    <div class="flex flex-row gap-12 px-8 py-12 justify-center bg-[#D6D4CB] text-[#3E4A4F]">

      <div>
        <h3 class="font-bold border-b border-black inline-block mb-2">Products</h3>
        <ul class="space-y-1">
          <li>
            <router-link to="/product">All Products</router-link>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold border-b border-black inline-block mb-2">About BuyHub</h3>
        <ul class="space-y-1">
          <router-link to="/enterprise">Enterprise</router-link>
        </ul>
      </div>

      <div>
        <h3 class="font-bold border-b border-black inline-block mb-2">Contact</h3>
        <ul class="space-y-1">
          <li>
            <router-link to="/contact">Contact BuyHub</router-link>
          </li>
        </ul>
      </div>

    </div>


    <div class="text-center text-xs text-gray-500 pb-6 bg-[#D6D4CB]">
      COPYRIGHT © 2025 BuyHub
    </div>
  </footer>

</template>

<template>
  <div class="fixed top-0 w-full bg-white text-gray-800 z-50 shadow-md font-serif">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 h-24 flex items-end py-4 justify-between ">

      <h1 class="text-3xl font-extrabold">BuyHub</h1>

      <nav class="ml-8 md:flex-1 flex-1 text-xl lg:text-xl text-gray-700 font-semibold">
        <ul class="flex gap-6 lg:gap-8 ">
          <li class="transition duration-300 ease-in-out hover:scale-105 hover:text-stone-300"><router-link to="/">Home</router-link></li>
          <li class="transition duration-300 ease-in-out hover:scale-105 hover:text-stone-300"><router-link to="/">Products</router-link></li>
          <li class="transition duration-300 ease-in-out hover:scale-105 hover:text-stone-300"><router-link to="/">About BuyHub</router-link></li>
        </ul>
      </nav>

      <div class="hidden sm:flex gap-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>

      </div>


    </div>
  </div>
</template>

<script setup>


</script>

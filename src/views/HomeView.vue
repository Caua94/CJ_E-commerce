<template>
  <main class="border-b border-[#6B8E99] shadow-2xl pt-24 group w-screen h-[500px] bg-[#F1F0E8] hover:bg-[#D6D4CB] transition duration-700 ease-in-out shadow-xl flex flex-col items-center justify-center font-serif">
    <h1 class="text-5xl text-shadow-lg/30s text-center text-[#89A8B2] font-semibold ">Store of all</h1>

    <div class="opacity-0 scale-95 group-hover:opacity-80 group-hover:scale-100 transition-all duration-500 ease-in-out flex flex-col items-center mt-4">
      <p class="text-sm">diversity</p>
      <div class="opacity-0 scale-80 group-hover:opacity-80 group-hover:scale-100 transition-all duration-900 ease-in-out">
        <button class="bg-[white] hover:bg-gray-200 text-black w-[230px] mt-4 p-2 rounded-sm">View products</button>
      </div>
    </div>
  </main>
  <div class="bg-white h-[500px] w-screen flex justify-center mt-12 flex-col mb-12">
    <h1 class="text-5xl text-[#3E4A4F] m-auto mb-6">Products categories</h1>

    <!-- Container com scroll horizontal -->
    <div class="flex gap-6 w-[1400px] overflow-x-auto px-6 m-auto ">
      <div class="flex gap-6 w-max flex-nowrap">
        <cardComponent/>
      </div>
    </div>
  </div>

</template>

<script setup>
import cardComponent from '../components/cardComponent.vue';

</script>


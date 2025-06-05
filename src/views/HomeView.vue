<template>
  <!-- HERO PRINCIPAL COM IMAGEM DE FUNDO E EFEITOS DE TRANSIÇÃO -->
  <main
    class="relative shadow-4xl group w-screen h-[500px] hover:bg-black transition duration-700 ease-in-out shadow-xl flex flex-col items-center justify-center bg-[url(../assets/img/bg.jpg)] bg-cover bg-center bg-no-repeat"
    :style="{ fontFamily: 'var(--font-mont)' }">

    <!-- Camada preta que aparece ao passar o mouse -->
    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-700 ease-in-out z-0"></div>

    <!-- Título e conteúdo do hero -->
    <div class="relative z-10 flex flex-col items-center justify-center text-center">
      <h1 class="text-border text-8xl text-center text-white font-extralight" :style="{ fontFamily: 'var(--font-dianora)' }">
        Store of all
      </h1>

      <!-- Subtítulo e botão com animação de entrada ao hover -->
      <div class="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out flex flex-col items-center mt-4">
        <p class="text-2xl text-white font-extralight">diversity</p>
        <div class="opacity-0 scale-80 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000 ease-in-out">
          <router-link to="/product">
            <button class="cursor-pointer bg-white hover:bg-gray-200 text-black w-[300px] mt-4 p-2 rounded-sm">
              View products
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </main>

  <!----------------------------------- SEÇÃO CATEGORIAS ----------------------------------->

  <!-- Seção com título e carrossel horizontal de categorias -->
  <div class="bg-white h-[500px] w-screen flex justify-center mt-36 flex-col mb-36"
    :style="{ fontFamily: 'var(--font-mont)' }">

    <h1 class="text-5xl text-[#3E4A4F] m-auto mb-6">Products categories</h1>

    <!-- Container horizontal com scroll para os cards -->
    <div class="flex gap-6 w-[1400px] overflow-x-auto px-6 m-auto pb-8">
      <div class="flex gap-6 w-max flex-nowrap">
        <!-- Componente de card renderizado dinamicamente -->
        <cardComponent />
      </div>
    </div>
  </div>

  <!----------------------------------- SEÇÃO PROMOÇÕES (DOLCE & CK) ----------------------------------->

  <!-- Duas seções lado a lado com produtos promocionais -->
  <div class="flex flex-nowrap justify-center gap-8 mb-8 rounded-2xl"
    :style="{ fontFamily: 'var(--font-mont)' }">

    <!-- BLOCO 1 - Dolce & Gabbana -->
    <div class="relative shadow-4xl group w-[740px] h-[740px] transition duration-700 ease-in-out shadow-xl flex items-center justify-center bg-[url(../assets/img/Dolce.png)] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden">
      <!-- Overlay escuro ao hover -->
      <div class="absolute inset-0 rounded-2xl bg-black opacity-0 group-hover:opacity-50 transition duration-700 ease-in-out z-0"></div>

      <!-- Conteúdo com título e botão -->
      <div class="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 class="text-8xl text-white text-border font-extralight" :style="{ fontFamily: 'var(--font-dianora)' }">
          valentine's day
        </h1>

        <!-- Texto e botão com animação ao hover -->
        <div class="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out flex flex-col items-center mt-4">
          <p class="text-2xl text-white font-extralight">A Dolce & Gabbana gift for you Girl</p>
          <div class="opacity-0 scale-80 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000 ease-in-out">
            <button class="cursor-pointer bg-white hover:bg-gray-200 text-black w-[300px] mt-4 p-2 rounded-sm">
              View product
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- BLOCO 2 - Calvin Klein -->
    <div class="relative shadow-4xl group w-[740px] h-[740px] transition duration-700 ease-in-out shadow-xl flex items-center justify-center bg-[url(../assets/img/ck.png)] bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden">
      <!-- Overlay escuro ao hover -->
      <div class="absolute inset-0 rounded-2xl bg-black opacity-0 group-hover:opacity-50 transition duration-700 ease-in-out z-0"></div>

      <!-- Conteúdo com título e botão -->
      <div class="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 class="text-8xl text-white text-border font-extralight" :style="{ fontFamily: 'var(--font-dianora)' }">
          valentine's day
        </h1>

        <!-- Texto e botão com animação ao hover -->
        <div class="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out flex flex-col items-center mt-4">
          <p class="text-2xl text-white font-extralight">A CK gift for you Boy</p>
          <div class="opacity-0 scale-80 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000 ease-in-out">
            <button class="cursor-pointer bg-white hover:bg-gray-200 text-black w-[300px] mt-4 p-2 rounded-sm">
              View product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importa o componente de cards de categoria
import cardComponent from '../components/cardComponent.vue';
</script>

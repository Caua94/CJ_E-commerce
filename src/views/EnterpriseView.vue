<template>
  <main
    class="relative shadow-4xl group w-full h-[600px] md:h-[700px] hover:bg-black transition duration-700 ease-in-out shadow-xl flex flex-col items-center justify-center bg-[url(../assets/img/enterprise.png)] bg-cover bg-center bg-no-repeat"
    :style="{ fontFamily: 'var(--font-mont)' }"
  >
    <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-700 ease-in-out z-0"></div>

    <div class="relative z-10 flex flex-col items-center justify-center text-center px-4">
      <h1
        class="text-4xl sm:text-6xl md:text-8xl text-white font-extralight text-center"
        :style="{ fontFamily: 'var(--font-dianora)' }"
      >
        BuyHub enterprise
      </h1>

      <div
        class="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out flex flex-col items-center mt-4"
      >
        <p class="text-lg sm:text-xl md:text-2xl text-white font-extralight">About</p>
        <div
          class="opacity-0 scale-80 group-hover:opacity-100 group-hover:scale-100 transition-all duration-1000 ease-in-out"
        >
          <a href="#About" class="cursor-pointer mt-4 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
              class="w-12 h-12 md:w-24 md:h-24">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </main>

  <div
    id="About"
    class="px-6 md:px-24 py-24 flex flex-col items-center justify-center text-start space-y-8 w-full scroll-mt-20 text-[#3E4A4F]"
    :style="{ fontFamily: 'var(--font-mont)' }"
  >
    <div class="space-y-2 max-w-4xl">
      <h1 class="font-bold text-xl md:text-2xl">BuyHub – Store of all</h1>
      <p class="text-base md:text-xl">
        BuyHub is more than just an online marketplace — it’s a gateway to a smarter, more connected way of living.
        Born from innovation and driven by vision, BuyHub is a UNIMAR project proudly developed by
        <a
          target="_blank"
          class="text-blue-500 hover:text-blue-700"
          href="https://github.com/ojhonata/Portfolio"
        >Jhonata Canevare</a>
        and
        <a
          target="_blank"
          class="text-blue-500 hover:text-blue-700"
          href="https://github.com/Caua94/PortfolioC94"
        >Cauã Reginato</a>, with a clear purpose: to bring everything you need into one trusted digital space.
      </p>
    </div>

    <div class="space-y-2 max-w-4xl">
      <h1 class="font-bold text-xl md:text-2xl">Our Philosophy</h1>
      <p class="text-base md:text-xl">
        At BuyHub, we believe accessibility and diversity are the foundations of modern commerce. Our mission is to
        simplify the online shopping experience by offering a wide range of products — from everyday essentials to
        exclusive items — all in one intuitive platform.
      </p>
      <p class="text-base md:text-xl">
        BuyHub was built on the idea that technology should connect, not complicate. That’s why our platform is designed
        to be inclusive, scalable, and always evolving — just like the people who use it.
      </p>
    </div>

    <div class="pt-24">
      <h1 class="font-bold text-xl md:text-2xl">Devs</h1>
    </div>
  </div>

  <div
    class="px-4 md:px-12 pb-12 flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-12 rounded-2xl"
    :style="{ fontFamily: 'var(--font-mont)' }"
  >
    <div class="w-full md:w-[600px]">
      <div
        class="w-full h-[300px] md:h-[600px] bg-[url(../assets/img/optionJhowCaua.png)] bg-cover bg-center bg-no-repeat shadow-xl border hover:scale-105 transition-transform"
      ></div>
      <h1 class="text-center text-sm opacity-75 mt-2">Developers IA illustration</h1>
    </div>

    <div class="w-full md:w-[600px]">
      <div
        class="w-full h-[300px] md:h-[600px] bg-[url(../assets/img/TernoJhowCaua.png)] bg-cover bg-center bg-no-repeat shadow-xl border hover:scale-105 transition-transform"
      ></div>
      <h1 class="text-center text-sm opacity-75 mt-2">Developers IA illustration</h1>
    </div>
  </div>
</template>

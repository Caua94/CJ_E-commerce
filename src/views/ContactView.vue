<template>
  <div class="w-full min-h-screen text-[#3E4A4F]" :style="{ fontFamily: 'var(--font-mont)' }">
    <main class="h-auto min-h-[400px] static border-b border-gray-400 flex justify-center items-center flex-col text-center px-4">
      <h1 class="mt-12 text-4xl md:text-6xl" :style="{ fontFamily: 'var(--font-dianora)' }">Contact BuyHub</h1>
      <p class="text-lg md:text-xl">Send a mensage.</p>
    </main>

    <div class="py-12 px-4 flex justify-center items-center">
      <div class="rounded-2xl pt-8 flex flex-col md:flex-row justify-center items-center gap-12 w-full max-w-6xl">
        <div class="w-full max-w-xl">
          <h1 class="text-2xl md:text-4xl font-semibold mb-4 text-center md:text-left">Contact BuyHub</h1>
          <form class="flex flex-col md:flex-row gap-8" action="">
            <div class="flex flex-col w-full">
              <p class="mb-4 text-lg md:text-xl">Your Name</p>
              <input placeholder="Name" class="mb-4 border rounded-xl pl-2 py-2" type="text">
              <p class="mb-4 text-lg md:text-xl">Your Email</p>
              <input placeholder="Email" class="mb-4 border rounded-2xl pl-2 py-2" type="text">
            </div>
            <div class="flex flex-col w-full">
              <p class="mb-4 text-lg md:text-xl">Your mensage</p>
              <textarea placeholder="mensage" class="border caret-rose-500 rounded-xl p-2 mb-4" rows="4"></textarea>
              <button class="bg-[#3E4A4F] hover:bg-sky-950 rounded-2xl h-12 text-white">Send email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

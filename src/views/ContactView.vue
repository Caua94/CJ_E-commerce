<template>
  <div class="w-full min-h-screen text-[#3E4A4F]"  :style="{ fontFamily: 'var(--font-mont)' }">
    <main class="h-[400px] static border-b border-gray-400 flex justify-center items-center flex-col">
      <h1 class="mt-12 text-6xl "  :style="{ fontFamily: 'var(--font-dianora)' }">Contact BuyHub
      </h1>
      <p class="text-xl">Send a mensage.</p>
    </main>



    <div class="h-[500px]  flex justify-center items-center " >
      <div class="rounded-2xl pt-8 flex justify-center items-center  gap-12 w-full">
        <div>
          <h1 class="text-4xl font-semibold mb-4">Contact BuyHub</h1>
          <form class="flex gap-8" action="">
            <div class="flex flex-col">
              <p class="mb-4 text-xl">Your Name</p>
              <input placeholder="Name" class="mb-4 border rounded-xl pl-2" type="text" size="40">
              <p class="mb-4 text-xl">Your Email</p>
              <input placeholder="Email" class="mb-4 border rounded-2xl pl-2" type="text" size="40">
            </div>
            <div class="flex flex-col">
              <p class="mb-4 text-xl">Your mensage</p>
              <textarea placeholder="mensage" class="border caret-rose-500 rounded-xl p-2" rows="4"
                cols="30"></textarea>
              <button class="bg-[#3E4A4F] hover:bg-sky-950 rounded-2xl h-12 mt-12 text-white">Send email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>




</template>

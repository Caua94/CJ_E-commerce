<script setup>
import NavBar from "./components/navBarComponent.vue"
import Footer from "./components/footerComponent.vue";
</script>

<template>
  <NavBar/>
  <div>
     <RouterView />
  </div>
  <Footer/>


</template>

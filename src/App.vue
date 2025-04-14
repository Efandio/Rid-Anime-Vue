<script setup lang="ts">
  import NavbarMenu from "./components/NavbarMenu.vue"

</script>

<template>
  <div class="w-screen h-screen bg-black text-white">
    <NavbarMenu />

    <RouterView />
  </div>
</template>

<style scoped>

</style>

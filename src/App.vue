<script setup lang="ts">
  import MainPage from "./views/MainPage.vue"
  import NavbarMenu from "./components/NavbarMenu.vue"
  import { onMounted } from "vue";
  import { animeFetcher } from "./api/fetcher";
  import { trendingNowQuery, trendingNowQueryVariables } from "./api/queries/trendingNow";

  // onMounted( async () => {
  //   const data = await animeFetcher({
  //     query: trendingNowQuery,
  //     variables: trendingNowQueryVariables
  //   })
  //   console.log(data)
  // })

</script>

<template>
  <div class="w-screen h-screen bg-black text-white">
    <NavbarMenu />

    <MainPage />
  </div>
</template>

<style scoped>

</style>

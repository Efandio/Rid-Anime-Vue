<script setup lang="ts">
import { onMounted } from 'vue';
import { animeFetcher } from '@/api/fetcher';
import { trendingNowQuery, trendingNowQueryVariables } from '@/api/queries/trendingNow';

onMounted( async () => {
    const data = await animeFetcher({
        query: trendingNowQuery,
        variables: trendingNowQueryVariables
    })
    console.log(data)
})

</script>

<template>
    <main class="">
        
    </main>
</template>
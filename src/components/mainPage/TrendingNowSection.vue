<script setup lang="ts">

import { onMounted, reactive } from 'vue';
import Badge from '../ui/badge/Badge.vue';
import Button from '../ui/button/Button.vue';
import { Card } from '../ui/card';
import { animeFetcher } from '@/api/fetcher';
import { trendingNowQuery, trendingNowQueryVariables } from '@/api/queries/trendingNow';
import type { TrendingAnimeType } from '@/api/queries/trendingNow';
import { useIsMobile } from '@/composables/isMobile';

const data = reactive({
    anime: null as TrendingAnimeType | null,
    loading: true,
    error: null as Error | null,
})

onMounted( async () => {
    try {
        const res = await animeFetcher({
            query: trendingNowQuery,
            variables: trendingNowQueryVariables
        })
        data.anime = res;
        data.loading = false;
    } catch (err) {
        data.error = err as Error;
        data.loading = false
    }
});

const mobile = useIsMobile()

</script>

<template>
    <main>
        <div class="w-full flex justify-between px-2 lg:px-20">
            <Badge class="">Trending Now</Badge>
            <Button class="text-xs cursor-pointer">See All</Button>
        </div>
        <div v-if="data.loading">Loading...</div>
        <div v-if="data.error">Error...</div>
        <div v-if="mobile" class="flex overflow-x-auto gap-5 w-full justify-center mt-2">
            <Card class="w-42 grid grid-cols-1 justify-items-center px-2 bg-transparent text-white" v-for="anime in data.anime?.Page.media.slice(0, 3)" :key="anime.id">
                <img class="w-20 h-32" :src="anime.coverImage.large || undefined" alt="">
                <h1 class="text-sm">{{ anime.title.english?.slice(0, 15) + '...' }}</h1>
            </Card>
        </div>
        <div v-else class="flex overflow-x-auto gap-5 w-full justify-center mt-4">
            <Card class="w-42 grid grid-cols-1 justify-items-center px-2 bg-transparent text-white" v-for="anime in data.anime?.Page.media.slice(0, 6)" :key="anime.id">
                <img class="lg:w-32 lg:h-48" :src="anime.coverImage.large || undefined" alt="">
                <h1 class="text-sm">{{ anime.title.english?.slice(0, 30) + '...' }}</h1>
            </Card>
        </div>
    </main>
</template>
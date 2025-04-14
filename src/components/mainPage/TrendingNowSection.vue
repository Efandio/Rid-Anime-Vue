<script setup lang="ts">

import { useTrendingAnime } from '@/stores/animeStore';
import { onMounted } from 'vue';
import Badge from '../ui/badge/Badge.vue';
import Button from '../ui/button/Button.vue';
import { Card } from '../ui/card';
import { useIsMobile } from '@/composables/isMobile';

const trendingAnime = useTrendingAnime();
const loading = trendingAnime.loading;
const error = trendingAnime.error;

onMounted( async() => {
    await trendingAnime.trendingAnime()
})

const mobile = useIsMobile();

</script>

<template>
    <main class="w-full flex flex-col">
        <div class="w-full flex justify-between px-2 lg:px-20">
            <Badge class="">Trending Now</Badge>
            <RouterLink to="/trending-now">
                <Button class="text-xs cursor-pointer">See All</Button>
            </RouterLink>
        </div>
        <div v-if="loading">Loading...</div>
        <div v-if="error">Error...</div>
        <div v-if="mobile" class="flex gap-5 w-full justify-center mt-2">
            <Card class="w-42 grid grid-cols-1 justify-items-center px-2 bg-transparent text-white cursor-pointer" v-for="anime in trendingAnime.trendingAnimeList?.Page.media.slice(0, 3)" :key="anime.id">
                <img class="w-20 h-32" :src="anime.coverImage.large || undefined" alt="">
                <h1 class="text-sm font-medium">{{ anime.title.english?.slice(0, 15) + '...' }}</h1>
            </Card>
        </div>
        <div v-else class="flex gap-5 w-full h-auto justify-center mt-4">
            <Card class="w-42 grid grid-cols-1 justify-items-center px-2 bg-transparent text-white cursor-pointer" v-for="anime in trendingAnime.trendingAnimeList?.Page.media.slice(0, 6)" :key="anime.id">
                <img class="lg:w-32 lg:h-48" :src="anime.coverImage.large || undefined" alt="">
                <h1 class="text-sm font-medium">{{ anime.title.english?.slice(0, 30) + '...' }}</h1>
            </Card>
        </div>
    </main>
</template>
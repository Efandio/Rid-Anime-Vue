<script setup lang="ts">

import { useTrendingAnime } from '@/stores/animeStore';
import { onMounted } from 'vue';
import Badge from '../ui/badge/Badge.vue';
import Button from '../ui/button/Button.vue';
import { Card } from '../ui/card';
import { useIsMobile } from '@/composables/isMobile';
import { useRouter } from 'vue-router';

const trendingAnime = useTrendingAnime();
const loading = trendingAnime.loading;
const error = trendingAnime.error;
const mobile = useIsMobile();
const router = useRouter()

onMounted( async() => {
    await trendingAnime.trendingAnime()
})

function animeDetails(id: number) {
    router.push({ name: 'details', params: { id } })
}


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
            <Card @click="animeDetails(anime.id)" class="w-42 grid grid-cols-1 justify-items-center px-2 bg-transparent text-white cursor-pointer" v-for="anime in trendingAnime.trendingAnimeList?.Page.media.slice(0, 3)" :key="anime.id">
                <img class="w-28 h-36 rounded-lg" :src="anime.coverImage.large || undefined" alt="">
                <h1 class="text-sm font-medium">{{ anime.title.english?.slice(0, 15) + '...' }}</h1>
            </Card>
        </div>
        <div v-else class="flex gap-5 w-full h-auto justify-center mt-4">
            <Card @click="animeDetails(anime.id)" class="w-42 grid grid-cols-1 justify-items-center px-2 bg-transparent text-white cursor-pointer border-none" v-for="anime in trendingAnime.trendingAnimeList?.Page.media.slice(0, 6)" :key="anime.id">
                <img class="lg:w-64 lg:h-52 rounded-lg" :src="anime.coverImage.large || undefined" alt="">
                <h1 class="text-sm font-medium -translate-y-4">{{ anime.title.english?.slice(0, 30) + '...' }}</h1>
            </Card>
        </div>
    </main>
</template>
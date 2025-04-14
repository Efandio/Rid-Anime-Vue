
<script setup lang="ts">
    import { useTrendingAnime } from '@/stores/animeStore';
    import { onMounted } from 'vue';
    import { Card } from '@/components/ui/card';
    import { useIsMobile } from '@/composables/isMobile';

    const mobile = useIsMobile();
    const allTrendingAnime = useTrendingAnime();

    const loading = allTrendingAnime.loading;
    const error = allTrendingAnime.error;

    onMounted(async() => {
        allTrendingAnime.trendingAnime()
    });

</script>

<template>
    <div class="pt-28 bg-black h-auto">
        <div v-if="loading">Loading...</div>
        <div v-if="error">Error...</div>

        <section class="w-full h-auto">
        <div v-if="mobile" class="grid grid-cols-3 justify-items-center mt-4">
            <Card class="w-36 grid grid-cols-1 justify-items-center px-2 bg-transparent text-white cursor-pointer border-none" v-for="anime in allTrendingAnime.trendingAnimeList?.Page.media" :key="anime.id">
                <img class="w-28 h-36 rounded-lg" :src="anime.coverImage.large || undefined" alt="">
                <h1 class="text-sm font-medium -translate-y-3">{{ anime.title.english?.slice(0, 15) + '...' }}</h1>
            </Card>
        </div>
        <div v-else class="grid grid-cols-7 w-full justify-center mt-4 px-10">
            <Card class="w-42 grid grid-cols-1 justify-items-center px-2 bg-transparent text-white cursor-pointer border-none" v-for="anime in allTrendingAnime.trendingAnimeList?.Page.media" :key="anime.id">
                <img class="lg:w-64 lg:h-52 rounded-lg" :src="anime.coverImage.large || undefined" alt="">
                <h1 class="text-sm font-medium -translate-y-4">{{ anime.title.english?.slice(0, 30) + '...' }}</h1>
            </Card>
        </div>
        </section>
    </div>
</template>


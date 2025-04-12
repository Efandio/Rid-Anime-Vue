<script setup lang="ts">
import FilterSection from '@/components/FilterSection.vue';
import TrendingNowSection from '@/components/mainPage/TrendingNowSection.vue';
</script>

<template>
    <main class="">
        <div class="w-full h-[30vh] relative">
            <FilterSection />
        </div>

        <div class="px-2">
            <TrendingNowSection />
        </div>
    </main>
</template>
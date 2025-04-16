<script setup lang="ts">
import { animeFetcher } from '@/api/fetcher';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

    const route = useRoute();
    const animeId = Number(route.params.id)


</script>

<template>
    <div class="pt-26">
        
    </div>
</template>
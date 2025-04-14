<script setup lang="ts">
import Input from './ui/input/Input.vue';
</script>

<template>
    <nav class="fixed z-50 w-full h-[10vh] flex flex-col lg:flex-row py-4 lg:py-10 gap-6 lg:justify-evenly items-center">
        <RouterLink to="/">
            <h1 class="text-xl font-bold">Rid-Anime</h1>
        </RouterLink>
        <form action="search">
            <Input class="w-[80vw] lg:w-[60vw]" placeholder="Search" />
        </form>
    </nav>
</template>
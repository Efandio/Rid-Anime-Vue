<script setup lang="ts">
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent, SelectGroup } from './ui/select';
</script>

<template>
    <div class="grid grid-cols-2 relative pt-36 justify-items-center lg:px-92">
        <Select>
            <SelectTrigger class="cursor-pointer">
                <SelectValue placeholder="Genres" />
            </SelectTrigger>

            <SelectContent>
                <SelectGroup>
                    <SelectItem value="TES">
                        TES
                        <!-- Genres Disini -->
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

        <Select>
            <SelectTrigger class="cursor-pointer">
                <SelectValue placeholder="Genres" />
            </SelectTrigger>

            <SelectContent>
                <SelectGroup>
                    <SelectItem value="TES">
                        TES
                        <!-- Tahun Disini -->
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
</template>
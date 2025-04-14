import { animeFetcher } from "@/api/fetcher";
import type { TrendingAnimeType } from "@/api/queries/trendingNow";
import { defineStore } from "pinia";
import { trendingNowQuery, trendingNowQueryVariables } from "@/api/queries/trendingNow";

export const useTrendingAnime = defineStore('trending', {
state: () => {
    return {
        trendingAnimeList: null as TrendingAnimeType | null,
        loading: false,
        error: null as string | null
    }
},

actions: {
    async trendingAnime() {
        this.loading = true;
        try {
            const response = await animeFetcher({
                query: trendingNowQuery,
                variables: trendingNowQueryVariables
            })
            if (response && response.Page && response.Page.media) {
                this.trendingAnimeList = response;
            } else {
                throw new Error ('Invalid Response Structure')
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                this.error = err.message;
            } else {
                this.error = String(err)
            }
        } finally {
            this.loading = false;
        }
    }
},


})
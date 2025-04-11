
import type { TrendingAnimeType, TrendingNowVariablesQueryType } from "./queries/trendingNow";
import { URL } from "./queries/trendingNow";

type AnimeFetcherArgs = {
    query: string;
    variables: TrendingNowVariablesQueryType
}

export async function animeFetcher ({query, variables}: AnimeFetcherArgs) {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            query,
            variables
        })
    })

    if (!response.ok) {
        throw new Error (`HTTP error: ${response.status}`)
    }
    
    const { data } = await response.json();

    const item: TrendingAnimeType = data;
    return item;
}
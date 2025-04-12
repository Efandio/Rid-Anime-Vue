

const URL = 'https://graphql.anilist.co'

export type TrendingAnimeType = {
    Page: {
        media: {
            id: number;
            title: {
                english: string | null;
                romaji: string | null;
            }
            bannerImage: string | null;
            coverImage: {
                large: string | null;
            }
            description: string | null;
            genres: string[] | null;
            season: string | null;
            episodes: number | null;
            trending: number | null;
            averageScore: number | null;
            duration: number | null;
            popularity: number | null;
            favourites: number | null;
            meanScore: number | null;
            status: string | null;
            type: string | null;
        }[];
    };
};

const trendingNowQuery = `
    query ($page: Int, $perPage: Int) {
        Page (page: $page, perPage: $perPage) {
            media (sort: TRENDING_DESC, type: ANIME) {
                id
                title {
                    english
                    romaji
                }
                bannerImage
                coverImage {
                    large
                }
                description
                genres
                season
                episodes
                trending
                averageScore
                duration
                popularity
                favourites
                meanScore
                status
                type
            }
        }
    }
`

export type TrendingNowVariablesQueryType = {
    page: number,
    perPage: number
};

const trendingNowQueryVariables: TrendingNowVariablesQueryType = {
    page: 1,
    perPage: 50
};

export { URL, trendingNowQuery, trendingNowQueryVariables }

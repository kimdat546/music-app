import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Tracks } from "@/types";

// Define a service using a base URL and expected endpoints
export const playlistApi = createApi({
    reducerPath: "playlistApi",
    baseQuery: fetchBaseQuery({
        baseUrl:
            "https://blozbzdot2fyjtgsvyinb4clya0wapxr.lambda-url.ap-southeast-2.on.aws/",
    }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query<Tracks, string>({
            query: (name) => `pokemon/${name}`,
        }),
    }),
});

export const { useGetPokemonByNameQuery } = playlistApi;

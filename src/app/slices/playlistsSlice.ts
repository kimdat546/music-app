import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Playlist } from "@/types";

interface PlaylistState {
    data: Playlist[];
}

const initialState: PlaylistState = {
    data: [],
};

export const playlistsSlice = createSlice({
    name: "playlists",
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<number>) => {
            // state.value += action.payload;
        },
    },
});

export const { incrementByAmount } = playlistsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.playlists.value;

export default playlistsSlice.reducer;

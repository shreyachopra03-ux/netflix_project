import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null as string | null,
        trailerVideo: null as string | null
    },
    reducers: {
        addNowPlayingMovies: (state, action:PayloadAction<string | null>) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action:PayloadAction<string | null>) => {
            state.trailerVideo = action.payload;
        }
    }
})


export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;

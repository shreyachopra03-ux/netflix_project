import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Movie = {
    id: number
    original_title: string
    overview: string
    poster_path: string;
}

type Trailer = {
    key: string
}

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies:  [] as Movie[],
        popularMovies: [] as Movie[],
        trailerVideo: null as Trailer | null
    },
    reducers: {
        addNowPlayingMovies: (state, action:PayloadAction<Movie[]>) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action:PayloadAction<Movie[]>) => {
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state, action:PayloadAction<Trailer>) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;

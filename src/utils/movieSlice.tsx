import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null as string | null
    },
    reducers: {
        addNowPlayingMovies: (state, action:PayloadAction<string | null>) => {
            state.nowPlayingMovies = action.payload;
        }
    }
})


export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;

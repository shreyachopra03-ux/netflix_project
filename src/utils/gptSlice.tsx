import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieNames: [], 
        movieResults: []
    },
    reducers: {
        toggleGptSearchView: (state) => {
        state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames,  movieResults } = action.payload;
            state.movieNames =  movieNames;
            state.movieResults = movieResults
        },
        clearCart: (state) => {
             state.movieNames = [];
             state.movieResults = []
        }
    }
})

export const { toggleGptSearchView, addGptMovieResult, clearCart } = gptSlice.actions;
export default gptSlice.reducer;
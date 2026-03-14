import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import type { RootState } from "../utils/appStore";

const useTrendingMovies = () => {

    // Fetching the data & putting it onto the store
   const dispatch = useDispatch();

   const trendingMovies = useSelector((store: RootState) => store.movies.popularMovies);

  const getTrendingMovies= async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',
    API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    // If now playing movies isn't there, then make an API call
    if (!trendingMovies) getTrendingMovies();
  }, [])
}

export default useTrendingMovies;
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import type { RootState } from "../utils/appStore";

const useTopRatedMovies = () => {

    // Fetching the data & putting it onto the store
   const dispatch = useDispatch();

   const TopRatedMovies = useSelector((store: RootState) => store.movies.nowPlayingMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',
    API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    // If now playing movies isn't there, then make an API call
    if (! TopRatedMovies) getTopRatedMovies();
  }, [])
}

export default useTopRatedMovies;
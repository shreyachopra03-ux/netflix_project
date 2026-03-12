import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import type { RootState } from "../utils/appStore";

const useNowPlayingMovies = () => {

    // Fetching the data & putting it onto the store
   const dispatch = useDispatch();

   const nowPlayingMovies = useSelector((store: RootState) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?Page=1',
    API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    // If now playing movies isn't there, then make an API call
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, [])
}

export default useNowPlayingMovies;
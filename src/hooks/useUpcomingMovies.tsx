import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import type { RootState } from "../utils/appStore";

const useUpcomingMovies = () => {

    // Fetching the data & putting it onto the store
   const dispatch = useDispatch();

   const nowUpcomingMovies = useSelector((store: RootState) => store.movies.nowPlayingMovies);

  const getNowUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',
    API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    // If now playing movies isn't there, then make an API call
    if (!nowUpcomingMovies) getNowUpcomingMovies();
  }, [])
}

export default useUpcomingMovies;
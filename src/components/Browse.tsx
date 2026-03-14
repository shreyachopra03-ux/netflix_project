import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearchPage";
import type { RootState } from "../utils/appStore";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";

const Browse = () => {
  const showGptSearch = useSelector((store:RootState) => store.gpt.showGptSearch)
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    useTrendingMovies();

  return (
    <div>
      <Header showUser={true} />
      {showGptSearch ? (
        <GptSearch /> 
      ) : (
        <>
        <MainContainer />
        <SecondaryContainer/>
        </>
      )}
    </div>
  );
};

export default Browse;
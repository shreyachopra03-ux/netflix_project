import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import type { RootState } from "../utils/appStore";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store:RootState) => store.gpt.showGptSearch)
    useNowPlayingMovies();

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
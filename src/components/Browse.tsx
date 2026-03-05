import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
    useNowPlayingMovies();
   
  return (
    <div>
      <Header showUser={true} />
    </div>
  );
};

export default Browse;
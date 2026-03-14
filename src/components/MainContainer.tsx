import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store:RootState) => store.movies?.nowPlayingMovies);

    if (!movies || movies.length === 0) return null;

    const mainMovie = movies[0];
    if (!mainMovie) return null;
    // console.log(mainMovie);

    const { original_title, overview, id } = mainMovie;

 return (
    <div className="pt-[30%] md:pt-0 bg-linear-to-b from-black ">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      
    </div>
 )
}

export default MainContainer;
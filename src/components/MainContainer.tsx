import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector((store:RootState) => store.movies?.nowPlayingMovies);

    // if (!movies) return;

    const mainMovie = movies[0];
    if (!mainMovie) return null;
    console.log(mainMovie);

    const { original_title, overview, id } = mainMovie;

 return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      
    </div>
 )
}

export default MainContainer;
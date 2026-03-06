import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import type { RootState } from "../utils/appStore";

const SecondaryContainer = () => {
    const movies = useSelector((store: RootState) => store.movies);

    return (
        <div>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        </div>
    )
}

export default SecondaryContainer;
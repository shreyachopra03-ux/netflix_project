import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import type { RootState } from "../utils/appStore";

const SecondaryContainer = () => {
    const movies = useSelector((store: RootState) => store.movies);

    return (
        movies.nowPlayingMovies && (
            <div className="bg-black">
                <div className="pb-8 -mt-25 pl-12 relative z-10">
                 <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                 <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
                 <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
                 <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
                 <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
                </div>
        </div>
        )
    )
}

export default SecondaryContainer;
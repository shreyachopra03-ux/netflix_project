import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import type { RootState } from "../utils/appStore";

const GptMovieSuggestion = () => {
    const { movieResults, movieNames } = useSelector((store: RootState) => store.gpt);
    if (!movieNames || !movieResults) return null;

    return (
        <div className="p-4 m-4 text-white bg-black/80">
        <div>
        {movieNames.map((movieName, index) => (
            <MovieList
               key={movieName}
               title={movieName}
               movies={movieResults[index]}
            />
        ))}
        </div>
        </div>
    )
}

export default GptMovieSuggestion;
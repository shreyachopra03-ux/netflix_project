import MovieCard from "../components/MovieCard";

export type Movie = {
  id: number;
  poster_path: string;
}

type Props = {
    title: string;
    movies:  Movie[]
}

const MovieList = ({ title, movies }:Props) => {
    return (
        <div className="px-6">
             <h1 className="text-lg md:text-3xl py-4 text-white z-10">{title}</h1>
            <div className="flex overflow-x-scroll hide-scrollbar">
            {/* <div className="flex"> */}
                    {movies.map(movie=> <MovieCard key={movie.id} posterPath={movie?.poster_path}/>)}
            </div>
            </div>
        // </div>

    );
};

export default MovieList;

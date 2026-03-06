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
        <div className="">
             <h1>{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies.map(movie=> <MovieCard key={movie.id} posterPath={movie?.poster_path}/>)}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
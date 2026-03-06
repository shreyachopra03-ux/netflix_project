import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
const dispatch = useDispatch();

    // fetch trailer video & updating the store with trailer video data
    const getMovieVideos = async () => {
        const data = await fetch ("https://api.themoviedb.org/3/movie/" + movieId + "/videos",
            API_OPTIONS
        );
        const json = await data.json();
        // console.log(json);

        const filterData = json.results.filter((video) => video.type == "Trailer");

        // If there's a trailer video then take that, otherwise return the 1st video out of all the resulting videos
        const trailer = filterData.length ? filterData[0] : json.results[0]
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer))
    };

    useEffect(() => {
        getMovieVideos();
    }, [])
}

export default useMovieTrailer;
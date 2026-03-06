import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {

    // fetch trailer video
    const getMovieVideos = async () => {
        const data = await fetch ("https://api.themoviedb.org/3/movie/1290821/videos",
            API_OPTIONS
        );
        const json = await data.json();
        console.log(json);

        const filterData = json.results.filter((video) => video.type == "Trailer");

        // If there's a trailer video then take that, otherwise return the 1st video out of all the resulting videos
        const trailer = filterData.length ? filterData[0] : json.results[0]
        console.log(trailer);
    }

    useEffect(() => {
        getMovieVideos();
    }, [])

    return (
        <div>
        <iframe width="560" height="315"
        src="https://www.youtube.com/embed/auHiLFjaIc0?si=7wNZGwGG79VmlIRw" 
        title="YouTube video player" 
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>  
        </div>
    )
}

export default VideoBackground;
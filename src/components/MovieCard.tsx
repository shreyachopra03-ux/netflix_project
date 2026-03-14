import { IMG_CDN_URL } from "../utils/constants";

type Props = {
    posterPath: string
}

const MovieCard = ({ posterPath }: Props) => {
    if (!posterPath) return null;
    // console.log(posterPath)
    
    return (
        <div className="shrink-0 w-36 md:w-48 pr-4">
            <img
            alt="Movie Card"
            src={IMG_CDN_URL + posterPath}
            />
        </div>
    )
}

export default MovieCard;


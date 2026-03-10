import { IMG_CDN_URL } from "../utils/constants";

type Props = {
    posterPath: string
}

const MovieCard = ({ posterPath }: Props) => {
    // console.log(posterPath)
    return (
        <div className="w-48 md:w-48 flex-none">
            <img
            alt="Movie Card"
            src={IMG_CDN_URL + posterPath}
            />
        </div>
    )
}

export default MovieCard;
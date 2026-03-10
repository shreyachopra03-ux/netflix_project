import GptSearchBar  from "../components/GptSearchBar.tsx";
import GptMovieSuggestion  from "../components/GptMovieSuggestion.tsx";
import { BACKGROUND_IMG } from "../utils/constants.tsx";
  
const GptSearchPage = () => {
    return (
        <div>
            <div className="absolute -z-10">
            <img
            src={BACKGROUND_IMG}
            alt="background"
            />
            </div>
        <GptSearchBar />
        <GptMovieSuggestion />
        </div>
    )
}

export default GptSearchPage;
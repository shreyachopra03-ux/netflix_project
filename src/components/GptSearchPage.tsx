import GptSearchBar  from "../components/GptSearchBar.tsx";
import GptMovieSuggestion  from "../components/GptMovieSuggestion.tsx";
import { BACKGROUND_IMG } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/gptSlice.tsx";

const GptSearchPage = () => {
    const dispatch = useDispatch();
    
    // useEffect cleanup
    useEffect(() => {
        return () => {
            dispatch(clearCart());
        }
    }, []);

    return (
        <div>
            <div className="fixed -z-10">
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
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
    <>
        <div className="fixed inset-0 -z-10 w-full bg-black">
        <img className="h-full w-full object-cover md:object-top-left" 
        src={BACKGROUND_IMG} 
        alt="background"/>
        </div>
        <div className="pt-41 md:pt-4 px-4">
        <GptSearchBar />
        <GptMovieSuggestion />
        </div>
    </>
    );
};

export default GptSearchPage;



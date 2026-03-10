import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";

const GptSearchBar = () => {

    const langKey = useSelector((store: RootState) => store.config.lang) as keyof typeof lang;

    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12">
            <input 
            type="text"
            className="p-4 m-4 col-span-9 text-white border-white border-2"
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg border-white border-2">
               {lang[langKey].search}
            </button>
            </form>
        </div>
    )
}

export default GptSearchBar; 

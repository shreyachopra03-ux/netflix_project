import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import groq from "../utils/groq";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const langKey = useSelector((store: RootState) => store.config.lang) as keyof typeof lang;
    const searchText = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    // search movie in TMDB
    const searchMovieTMDB = async (movie: string) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
            + movie +
            "&include_adult=false&language=en-US&page=1",
             API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current?.value);

        // Make an API Call to GET API and Movie Results 

        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " +
        searchText.current?.value + 
        ". only gives names of 5 movies, comma separated like the example result given ahead. Example Result: Kuch Kuch Hota Hai, 2 states, Gadar, Kerala story 2, Don";

       const gptResults = await groq.chat.completions.create({
       model: "llama-3.1-8b-instant",
       messages: [
        {
         role: "user",
         content: gptQuery
        }
        ]
        });

        if(!gptResults.choices) {
            // TODO: WRITE ERROR HANDLING CODE
        }

        console.log(gptResults.choices?.[0]?.message?.content);

        // Baazigar, Andhadhun, Satya, Company, Johnny Gaddaar
        const gptMovies = gptResults.choices?.[0]?.message?.content?.split(",");
       
        // ['Baazigar', 'Andhadhun', 'Satya', 'Company', 'Johnny Gaddaar']

        // For each movie I will search TMDB API
        const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie));
        // [ promise, promise, , promise,  promise, promise ]

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);

        dispatch(addGptMovieResult(tmdbResults));

        }

    return (
        <div className="pt-[10%] flex justify-center">
            <form 
            className="w-1/2 bg-black grid grid-cols-12"
            onSubmit={(e) => e.preventDefault()}
            >
            <input 
            ref={searchText }
            type="text"
            className="p-4 m-4 col-span-9 text-white border-white border-2"
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg border-white border-2"
            onClick={handleGptSearchClick}
            >
            {lang[langKey].search}
                
            </button>
            </form>
        </div>
    )
}

export default GptSearchBar; 

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
        <div className="fixed inset-0 -z-10 w-full overflow-hidden bg-black">
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

//     return (
//   <>
//     {/* Background Container */}
//     <div className="fixed inset-0 -z-10 w-full overflow-hidden bg-black">
//       <img 
//         className="h-full w-full object-cover md:object-top-left" 
//         src={BACKGROUND_IMG} 
//         alt="background"
//       />
//     </div>

//     {/* Content Container */}
//     <div className="pt-[35%] md:pt-[10%] px-4">
//       <GptSearchBar />
//       <GptMovieSuggestion />
//     </div>
//   </>
// );
};

export default GptSearchPage;


// import GptSearchBar from "./GptSearchBar";
// import GptMovieSuggestion from "./GptMovieSuggestion";
// import { BACKGROUND_IMG } from "../utils/constants";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { clearCart } from "../utils/gptSlice"; // Extension .tsx hata do agar unnecessary hai

// const GptSearchPage = () => {
//     const dispatch = useDispatch();
    
//     useEffect(() => {
//         return () => {
//             dispatch(clearCart());
//         };
//     }, [dispatch]);

//     return (
//         <div className="relative min-h-screen">
//             {/* Background Image: Mobile pe fixed height aur object-cover taki stretch na ho */}
//             <div className="fixed -z-10 w-full h-full">
//                 <img 
//                     className="h-screen object-cover" 
//                     src={BACKGROUND_IMG} 
//                     alt="background"
//                 />
//             </div>

//             {/* Content Container: Mobile pe pt-40 (header ke niche) aur desktop pe pt-[10%] */}
//             <div className="pt-41 md:pt-4 px-4">
//                 <GptSearchBar />
//                 <GptMovieSuggestion />
//             </div>
//         </div>
//     );
// };

// export default GptSearchPage;
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { RootState } from "../utils/appStore";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

interface HeaderProps {
  showUser?: boolean;
}

const Header = ({ showUser = false }: HeaderProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);
    const showGptSearch = useSelector((store: RootState) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {})
        .catch(() => {
            navigate("/error");
        });
    };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          })
        );
        navigate("/browse");   
        } 
        else {
        dispatch(removeUser());
        navigate("/");  
        }
    });

    // Unsubscribe when the component unmounts => it's like a cleanup fn
    return () => unsubscribe();
    }, [dispatch, navigate]);

    const handleGptSearchClick = () => {
      // Toggle Gpt Search
      dispatch(toggleGptSearchView());

    };

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value))
    }

    return (
    <div className="absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center bg-linear-to-b from-black z-20">

      <img
        src={LOGO}
        alt="logo"
        className="w-40"
      />

      {showUser && (
        <div className="flex items-center gap-4">
          {showGptSearch && (
          <select 
          className="p-2 bg-gray-900 text-white m-2"
          onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value= {lang.identifier}>
              {lang.name}
              </option>
            ))}
          </select>
          )}
        <button 
          onClick={handleGptSearchClick}
          className="py-2 px-4 m-2 my-2 bg-blue-500 text-white broder rounded-lg border-2">
            {showGptSearch ? "Homepage" : "GPT Search"};
        </button>
        <img
            src={user?.photoURL || USER_AVATAR}
            className="w-10 h-10 border-2 border-white rounded-lg my-2"
            alt="usericon"/>
        <button 
          onClick={handleSignOut}
          className="bg-red-600 px-4 m-2 py-2 rounded-lg text-white hover:bg-red-700 border-2 my-2">
            Sign Out
        </button>
        </div>
      )}
    </div>
  );
};

export default Header;
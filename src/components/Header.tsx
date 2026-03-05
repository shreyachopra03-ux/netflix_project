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

interface HeaderProps {
  showUser?: boolean;
}

const Header = ({ showUser = false }: HeaderProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {})
        .catch((error) => {
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

    return (
    <div className="absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center bg-gradient-to-b from-black z-20">

      <img
        src={LOGO}
        alt="logo"
        className="w-40"
      />

      {showUser && (
        <div className="flex items-center gap-4">
          <img
            src={user?.photoURL || USER_AVATAR}
            className="w-10 h-10 rounded-md"
            alt="usericon"
          />

          <button 
          onClick={handleSignOut}
          className="bg-red-600 px-4 py-1 rounded text-white hover:bg-red-700">
            Sign Out
          </button>
        </div>
      )}

    </div>
  );
};

export default Header;
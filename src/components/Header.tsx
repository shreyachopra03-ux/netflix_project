import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

interface HeaderProps {
  showUser?: boolean;
}

const Header = ({ showUser = false }: HeaderProps) => {
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth).then(() => {
           navigate("/");
        })
        .catch((error) => {
            navigate("/error");
        });

    }
  return (
    <div className="absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center bg-gradient-to-b from-black z-20">

      <img
        src="/netflix-logo.png"
        alt="logo"
        className="w-40"
      />

      {showUser && (
        <div className="flex items-center gap-4">
          <img
            src="/user-icon.png"
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
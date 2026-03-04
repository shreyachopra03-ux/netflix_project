import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current?.value || "",
      password.current?.value || ""
    );

    setErrorMessage(message);

    if (message) return;

    // sign up form logic
    if (!isSignInForm) {
     createUserWithEmailAndPassword(
        auth,
        email.current?.value || "",
        password.current?.value || ""
    )
    .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
            displayName: name.current?.value || "",
            photoURL: "https://avatars.githubusercontent.com/u/201982287?v=4"
            })
            .then(() => {
             navigate("/browse")
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
    })
    .catch((error) => {
        setErrorMessage(error.code + "," + error.message);
    });
    } 

    // sign in form logic
    else {
        signInWithEmailAndPassword(
        auth,
        email.current?.value || "",
        password.current?.value || ""
        )
        .then(() => navigate("/browse"))
        .catch((error) => {
          setErrorMessage(error.code + "," + error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-full h-screen">
      <Header />

      <img
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg"
        alt="background"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 min-w-[320px] p-10 bg-black/80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white rounded-lg z-10"
      >
        <h1 className="text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full rounded bg-gray-700 focus:outline-none"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full rounded bg-gray-700 focus:outline-none"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full rounded bg-gray-700 focus:outline-none"
        />

        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>

        <button
          className="p-3 mt-5 w-full bg-red-600 rounded hover:bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="mt-6 text-sm cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already registered? Sign In."}
        </p>
      </form>
    </div>
  );
};

export default Login;
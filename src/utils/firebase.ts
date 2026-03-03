// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9YwqTHKcP_leTWmUM69VluWHJewiu_ws",
  authDomain: "netflix-gpt-32dd8.firebaseapp.com",
  projectId: "netflix-gpt-32dd8",
  storageBucket: "netflix-gpt-32dd8.firebasestorage.app",
  messagingSenderId: "851347264202",
  appId: "1:851347264202:web:8e85b80263d26bda05da33",
  measurementId: "G-NBNHZE72S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);
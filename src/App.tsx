// import Body from "./components/Body";
// import  appStore  from "./utils/appStore";
// import { Provider } from "react-redux";

// function App() {
//   return (
//     <Provider store={appStore}>
//     <Body />
//     </Provider>
//   );
// }

// export default App;

import { useEffect } from "react";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <Body />;
}

function App() {
  return (
    <Provider store={appStore}>
      <AppContent />
    </Provider>
  );
}

export default App;
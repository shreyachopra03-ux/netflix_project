import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function AppContent() {
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
import { Provider } from "react-redux";
import Home from "./pages/Home";
import store from "./app/features/store";

function App() {
  return (
    <div className="App" style={{ height: "200vh" }}>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;

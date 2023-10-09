import { Provider } from "react-redux";
import Home from "./pages/Home";
import store from "./app/features/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

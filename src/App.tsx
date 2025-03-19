import { Routes, Route } from "react-router-dom";
import "./style/style.css";
import HomePage from "./components/sections/HomePage/HomePage";

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route
            path="*"
            element={
              <>
                <HomePage />
              </>
            }
          />
        </Routes>
    </div>
  );
};

export default App;

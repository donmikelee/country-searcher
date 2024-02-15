import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router";
import RegionDropdown from "./components/controls/RegionDropdown/RegionDropdown";
import InputSearch from "./components/controls/InputSearch/InputSearch";
import CountryCard from "./components/sections/CountryCard/CountryCard";
import CountryDetails from "./components/sections/CountryDetails/CountryDetails";
import Nav from "./components/sections/Nav/Nav";
import "./style/style.css";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Nav />
        <main className="main-panel">
          <section className="main-controls">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <InputSearch />
                    <RegionDropdown />
                  </>
                }
              />
            </Routes>
            <Routes>
              <Route
                path="/:countryName"
                element={
                  <>
                    <Link to="/">Back</Link>
                  </>
                }
              />
            </Routes>
          </section>
          <section className="countries-list">
            <Routes>
              <Route path="/" element={<CountryCard />} />
            </Routes>
          </section>
          <section className="countries-details">
            <Routes>
              <Route path="/:countryName" element={<CountryDetails />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
};

export default App;

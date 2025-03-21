import { Routes, Route, useLocation } from "react-router-dom";
import RegionDropdown from "../../controls/RegionDropdown/RegionDropdown";
import InputSearch from "../../controls/InputSearch/InputSearch";
import CountryCard from "../CountryCard/CountryCard";
import CountryDetails from "../CountryDetails/CountryDetails";
import Nav from "../Nav/Nav";

const HomePage = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <>
      <Nav />
      <main className="main-panel">
        {isHomePage && (
          <section className="main-controls">
            <InputSearch />
            <RegionDropdown />
          </section>
        )}
        <section className="countries-list">
          <Routes>
            <Route path="/" element={<CountryCard />} />
            <Route path="/:countryName" element={<CountryDetails />} />
          </Routes>
        </section>
      </main>
    </>
  );
};

export default HomePage;

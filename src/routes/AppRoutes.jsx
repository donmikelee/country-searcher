import { Routes, Route } from "react-router-dom";
import CountryCard from "../components/sections/CountryCard/CountryCard";
import CountryDetails from "../components/sections/CountryDetails/CountryDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CountryCard />} />
      <Route path="/:countryName" element={<CountryDetails />} />
    </Routes>
  );
};

export default AppRoutes;
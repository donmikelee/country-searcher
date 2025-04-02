import { useLocation } from "react-router-dom";
import RegionDropdown from "../../controls/RegionDropdown/RegionDropdown";
import InputSearch from "../../controls/InputSearch/InputSearch";
import Nav from "../Nav/Nav";
import AppRoutes from "../../../routes/AppRoutes";
import SortDropdown from "../../controls/SortDropdown/SortDropdown";
import RecentlyViewed from "../RecentlyViewed/RecentlyViewed";


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
            <RecentlyViewed />
            <RegionDropdown />
            <SortDropdown />
          </section>
        )}
        <section className="countries-list">
          <AppRoutes/>
        </section>
      </main>
    </>
  );
};

export default HomePage;

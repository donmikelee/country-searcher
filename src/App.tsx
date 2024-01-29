
import CountriesFilter from "./components/controls/CountriesFilter/CountriesFilter";
import InputSearch from "./components/controls/InputSearch/InputSearch";
import CountryCard from "./components/sections/CountryCard/CountryCard";
import Nav from "./components/sections/Nav/Nav";
import "./style/style.css";

const App = () => {

  return ( 
    <div className="App">
      <Nav/>
      <main className="main-panel">
        <section className="main-controls">
          <InputSearch/>
          <CountriesFilter/>
        </section>
        <section className="countries-panel">
          <ul className="countries-list">
            <CountryCard/>
            <CountryCard/>
            <CountryCard/>
            <CountryCard/>
            <CountryCard/>
            <CountryCard/>
            <CountryCard/>
            <CountryCard/>
          </ul>
        </section>
      </main>
    </div>
  );
}
 
export default App;
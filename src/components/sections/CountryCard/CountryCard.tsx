import { useData } from "../../../data/DataContext";
import { Link } from "react-router-dom";

const CountryCard = () => {
    const { countries, filtredRegion, typedCountryName, sortBy } = useData();

    const filteredCountries = countries.filter(country => {
        const regionFilter = !filtredRegion || country.region === filtredRegion;
        const nameFilter = !typedCountryName || country.name.common.toLowerCase().startsWith(typedCountryName.toLowerCase());
        return regionFilter && nameFilter;
    });

    const sortedCountries = filteredCountries.sort((a, b) => {
        switch (sortBy) {
            case "population-asc":
                return a.population - b.population;
            case "population-desc":
                return b.population - a.population;
            case "name-asc":
                return a.name.common.localeCompare(b.name.common);
            case "name-desc":
                return b.name.common.localeCompare(a.name.common);
            default:
                return 0;
        }
    });

    return (
        <>
            {sortedCountries.length > 0 ? (
                sortedCountries.map((country, index) => (
                    <div key={index} className="country-card">
                        <Link to={`/${country.name.common.toLowerCase()}`} className="country-link">
                            <div className="flag">
                                <img className="flag-img" src={country.flags.png} alt={country.flags.alt}></img>
                            </div>
                            <div className="country-data">
                                <div className="name">
                                    <span>{country.name.common}</span>
                                </div>
                                <div className="population">
                                    <span className="population-label label">Population: </span>
                                    <span className="population-data data">{country.population.toLocaleString()}</span>
                                </div>
                                <div className="region">
                                    <span className="region-label label">Region: </span>
                                    <span className="region-data data">{country.region}</span>
                                </div>
                                <div className="capital">
                                    <span className="capital-label label">Capital: </span>
                                    <span className="capital-data data">{country.capital}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <p className="no-results">Country with the given name not found.</p>
            )}
        </>
    );
};

export default CountryCard;

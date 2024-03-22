import { useData } from "../../../data/DataContext";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countries } = useData();
  const { countryName } = useParams();

  const country = countries.find((c) => c.name.common === countryName);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <section className="countries-details">
      <div className="country-details">
        <div className="flag">
          <img
            className="flag-img"
            src={country.flags.png}
            alt={country.flags.alt}
          />
        </div>
        <div className="country-data">
          <div className="name">
            <span>{country.name.common}</span>
          </div>
          <div className="population">
            <span className="population-label label">Population: </span>
            <span className="population-data data">{country.population}</span>
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
      </div>
    </section>
  );
};

export default CountryDetails;

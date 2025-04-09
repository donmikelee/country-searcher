import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../../../data/DataContext";
import IconSVG from "../../controls/IconSVG/IconSVG";
import { Country } from "@/types/Country";

const CountryDetails = () => {
  const { countries, addToRecentlyViewed } = useData();
  const { countryName } = useParams<{ countryName: string }>();
  const navigate = useNavigate();

  const country: Country | undefined = countries.find(
    (country) => country.name.common.toLowerCase() === countryName?.toLowerCase()
  );

  useEffect(() => {
    if (country) {
      addToRecentlyViewed({ name: country.name.common, flag: country.flags.png });
    }
  }, [country, addToRecentlyViewed]);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <>
      <section className="backButton">
        <button className="button back-button" onClick={() => navigate("/")}>
          <IconSVG name={"arrow-right"} />
          Back
        </button>
      </section>
      <section className="countries-details">
        <div className="country-details">
          <div className="flag">
            <img className="flag-img" src={country.flags.png} alt={country.flags.alt} />
          </div>
          <div className="country-data">
            <div className="name">
              <span>{country.name.common}</span>
            </div>
            <div className="country-data-cols">
              <div className="country-data-first-col">
                <div className="population">
                  <span className="population-label label">Population: </span>
                  <span className="population-data data">{country.population}</span>
                </div>
                <div className="region">
                  <span className="region-label label">Region: </span>
                  <span className="region-data data">{country.region}</span>
                </div>
                <div className="subregion">
                  <span className="subregion-label label">Subregion: </span>
                  <span className="subregion-data data">{country.subregion}</span>
                </div>
                <div className="capital">
                  <span className="capital-label label">Capital: </span>
                  <span className="capital-data data">{country.capital}</span>
                </div>
              </div>
              <div className="country-data-second-col">
                <div className="tld">
                  <span className="tld-label label">Top Level Domain: </span>
                  <span className="tld-data data">{country.tld}</span>
                </div>
                <div className="currencies">
                  <span className="currencies-label label">Currencies: </span>
                  <span className="currencies-data data">
                    {Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")}
                  </span>
                </div>
                <div className="languages">
                  <span className="languages-label label">Languages: </span>
                  <span className="languages-data data">
                    {Object.values(country.languages).join(", ")}
                  </span>
                </div>
              </div>
            </div>
            <div className="borders">
              <span className="borders-label label">Border Countries: </span>
              {country.borders && country.borders.length > 0 ? (
                <ul className="borders-data data">
                  {country.borders.map((border, index) => (
                    <li key={index}>{border}</li>
                  ))}
                </ul>
              ) : (
                <span className="borders-data data">None</span>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryDetails;

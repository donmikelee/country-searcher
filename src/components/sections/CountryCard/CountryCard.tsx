const CountryCard = () => {
    return (
        <li className="country-card">
            <div className="flag"></div>
            <div className="country-data">
                <div className="name">
                    <span>Germany</span>
                </div>
                <div className="population">
                    <span className="population-label label">Population: </span>
                    <span className="population-data data">81,770,900</span>
                </div>
                <div className="region">
                    <span className="region-label label">Region: </span>
                    <span className="region-data data">Europe</span>
                </div>
                <div className="capital">
                    <span className="capital-label label">Capital: </span>
                    <span className="capital-data data">Berlin</span>
                </div>
            </div>
        </li>
    );
}
 
export default CountryCard;
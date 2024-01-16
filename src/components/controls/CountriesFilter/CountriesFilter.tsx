import { useState } from "react"

const CountriesFilter = () => {

    const [expanded, setExpand] = useState(false);

    const expandList = () => {
        setExpand(!expanded)
    }

    return (
        <div className="countries-filter">
            <div className={expanded ? "selected-option" : "selected-option selected-option--expanded"} onClick={expandList}>Filter by Region</div>
            <ul className={expanded ? "region-list" : "region-list--expanded"}>
                <li className="region-item" value="USA">Africa</li>
                <li className="region-item" value="Canada">America</li>
                <li className="region-item" value="Brazil">Asia</li>
                <li className="region-item" value="Polska">Europe</li>
                <li className="region-item" value="England">Oceania</li>
            </ul>
        </div> 
    )
}
export default CountriesFilter
import { useState, useEffect } from "react"
import { useData } from "../../../data/DataContext";

const RegionDropdown = () => {

    const [expanded, setExpand] = useState(false);
    const [regions, setRegions] = useState<string[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string | undefined>("Filter by Region");
    const { countries, setFiltredRegion } = useData();

    useEffect(() => {
        if (countries && countries.length > 0) {
          const uniqueRegions = ['All countries', ...Array.from(new Set(countries.map(country => country.region))).filter(Boolean)];
          setRegions(uniqueRegions);
        }
    }, [countries]);

    const expandList = () => {
        setExpand((prevState => !prevState))
    }

    const handleChangeRegion = (region: string) => {
        setSelectedRegion(region);
        setExpand((prevState => !prevState));
        setFiltredRegion(region === 'All countries' ? undefined : region);
    };

    return (
        <div className="countries-filter">
            <div className={expanded ? "selected-option selected-option--expanded" : "selected-option"} onClick={expandList}>{selectedRegion}</div>
            <ul className={expanded ? "region-list--expanded" : "region-list"}>
                {regions.map(region => (
                    <li key={region} value={region} className="region-item" onClick={() => handleChangeRegion(region)}>{region}</li>
                ))}
            </ul>
        </div> 
    )
}
export default RegionDropdown
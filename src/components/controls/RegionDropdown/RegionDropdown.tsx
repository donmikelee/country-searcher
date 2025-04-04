import { useState, useEffect } from "react";
import { useData } from "../../../data/DataContext";
import IconSVG from "../IconSVG/IconSVG";

const RegionDropdown = () => {
    const [expanded, setExpand] = useState(false);
    const [regions, setRegions] = useState<string[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<string | undefined>(
        "Filter by Region"
    );
    const { countries, setFiltredRegion } = useData();

    useEffect(() => {
        if (countries && countries.length > 0) {
            const uniqueRegions = [
                "All countries",
                ...Array.from(new Set(countries.map((country) => country.region)))
                    .filter(Boolean)
                    .sort((a, b) => a.localeCompare(b)),
            ];
            setRegions(uniqueRegions);
        }
    }, [countries]);

    const expandList = () => {
        setExpand((prevState) => !prevState);
    };

    const handleChangeRegion = (region: string) => {
        setSelectedRegion(region);
        setExpand((prevState) => !prevState);
        setFiltredRegion(region === "All countries" ? null : region);
    };

    return (
        <div className="countries-dropdown countries-filter">
            <span id="region-label" className="countries-label sr-only">
                Region
            </span>
            <div
                className={
                    expanded
                        ? "selected-option selected-option--expanded"
                        : "selected-option"
                }
                onClick={expandList}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") expandList();
                }}
                role="combobox"
                aria-expanded={expanded}
                aria-labelledby="region-label"
                tabIndex={0}
            >
                <span>{selectedRegion}</span>
                <IconSVG name="chevron-down" />
            </div>
            <ul
                className={expanded ? "region-list--expanded" : "region-list"}
                role="listbox"
            >
                {regions.map((region) => (
                    <li
                        key={region}
                        value={region}
                        className="region-item"
                        role="option"
                        onClick={() => handleChangeRegion(region)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleChangeRegion(region);
                        }}
                        tabIndex={0}
                    >
                        {region}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default RegionDropdown;

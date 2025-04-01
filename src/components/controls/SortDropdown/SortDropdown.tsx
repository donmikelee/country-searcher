import { useState } from "react";
import { useData } from "../../../data/DataContext";
import IconSVG from "../IconSVG/IconSVG";

const SortDropdown = () => {
    const [expanded, setExpand] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>("Sort by Population");

    const { setSortBy } = useData();

    const options = [
        { label: "Default", value: "dft" },
        { label: "Population (Descending)", value: "desc" },
        { label: "Population (Ascending)", value: "asc" },
    ];

    const expandList = () => {
        setExpand((prevState) => !prevState);
    };

    const handleSelection = (option: { label: string; value: string }) => {
        setSelectedOption(option.label);
        setExpand(false);
        setSortBy(option.value);
    };

    return (
        <div className="countries-dropdown countries-sorter">
            <div className="selected-option" onClick={expandList}>
                <span>{selectedOption}</span>
                <IconSVG name="chevron-down" />
            </div>
            {expanded && (
                 <ul className={expanded ? "region-list--expanded" : "region-list"}>
                    {options.map((option) => (
                        <li key={option.value} className="region-item" onClick={() => handleSelection(option)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SortDropdown;

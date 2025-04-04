import { useState } from "react";
import { useData } from "../../../data/DataContext";
import IconSVG from "../IconSVG/IconSVG";

const SortDropdown = () => {
    const [expanded, setExpand] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>("Sort by");

    const { setSortBy } = useData();

    const options = [
        { label: "Population (Descending)", value: "population-desc" },
        { label: "Population (Ascending)", value: "population-asc" },
        { label: "Name (A-Z)", value: "name-asc" },
        { label: "Name (Z-A)", value: "name-desc" },
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
            <span id="sort-label" className="sr-only">Sort by</span>
            <div
                className={expanded
                    ? "selected-option selected-option--expanded"
                    : "selected-option"}
                onClick={expandList}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") expandList();
                }}
                role="combobox"
                aria-expanded={expanded}
                aria-labelledby="sort-label"
                tabIndex={0}
            >
                <span>{selectedOption}</span>
                <IconSVG name="chevron-down" />
            </div>
            {expanded && (
                <ul className="region-list--expanded" role="listbox">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="region-item"
                            role="option"
                            onClick={() => handleSelection(option)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSelection(option);
                            }}
                            tabIndex={0}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SortDropdown;

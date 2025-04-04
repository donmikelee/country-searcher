import { useState, useRef, useEffect } from "react";
import IconSVG from "../IconSVG/IconSVG";

interface DropdownOption {
  label: string;
  value: string | null;
}

interface DropdownProps {
  additionalClass: string;
  labelId: string;
  labelText: string;
  defaultLabel: string;
  options: DropdownOption[];
  onSelect: (value: string | null) => void;
}

const Dropdown = ({
  additionalClass,
  labelId,
  labelText,
  defaultLabel,
  options,
  onSelect,
}: DropdownProps) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(defaultLabel);
  
  const dropdownRef = useRef<HTMLDivElement | null>(null); 

  const expandList = () => {
    setExpanded((prev) => !prev);
  };

  const handleSelection = (option: DropdownOption) => {
    setSelectedOption(option.label);
    setExpanded(false);
    onSelect(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`countries-dropdown ${additionalClass}`} ref={dropdownRef}>
      {labelText.length > 0 ? (
        <span id={labelId} className="sr-only">
          {labelText}
        </span>
      ) : null}

      <div
        className={
          expanded ? "selected-option selected-option--expanded" : "selected-option"
        }
        onClick={expandList}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") expandList();
        }}
        role="combobox"
        aria-expanded={expanded}
        aria-labelledby={labelId}
        tabIndex={0}
      >
        <span>{selectedOption}</span>
        <IconSVG name="chevron-down" />
      </div>

      {expanded && (
        <ul className="dropdown-list--expanded" role="listbox">
          {options.map((option) => (
            <li
              key={option.label}
              className="dropdown-item"
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

export default Dropdown;

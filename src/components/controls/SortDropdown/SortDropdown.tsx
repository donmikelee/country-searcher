import { useData } from "../../../data/DataContext";
import Dropdown from "../Dropdown/Dropdown";

const SortDropdown = () => {
  const { setSortBy } = useData();

  const sortOptions = [
    { label: "Population (Descending)", value: "population-desc" },
    { label: "Population (Ascending)", value: "population-asc" },
    { label: "Name (A-Z)", value: "name-asc" },
    { label: "Name (Z-A)", value: "name-desc" },
  ];

  return (
    <Dropdown
      additionalClass="countries-sorter"
      labelId="sort-label"
      labelText="Sort by"
      defaultLabel="Sort by"
      options={sortOptions}
      onSelect={setSortBy}
    />
  );
};

export default SortDropdown;
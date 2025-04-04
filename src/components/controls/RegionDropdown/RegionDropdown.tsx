import { useEffect, useState } from "react";
import { useData } from "../../../data/DataContext";
import Dropdown from "../Dropdown/Dropdown";

const RegionDropdown = () => {
  const { countries, setFiltredRegion } = useData();
  const [regionOptions, setRegionOptions] = useState<{ label: string; value: string | null }[]>([]);

  useEffect(() => {
    if (countries && countries.length > 0) {
      const uniqueRegions = Array.from(new Set(countries.map((c) => c.region))).filter(Boolean);
      const options = [
        { label: "All countries", value: null },
        ...uniqueRegions.map((region) => ({ label: region, value: region })),
      ];
      setRegionOptions(options);
    }
  }, [countries]);

  return (
    <Dropdown
      additionalClass="countries-filter"
      labelId="region-label"
      labelText="Region"
      defaultLabel="Filter by Region"
      options={regionOptions}
      onSelect={setFiltredRegion}
    />
  );
};

export default RegionDropdown;
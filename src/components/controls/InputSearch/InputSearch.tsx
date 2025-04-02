import { useData } from "../../../data/DataContext";

const InputSearch = () => {   
    const { typedCountryName, setTypedCountryName } = useData();

    const handleChangeCountryName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTypedCountryName(e.target.value);
    };

    return (
        <div className="input-container">
            <label htmlFor="input-search" style={{ display: 'none' }}>Search for a country</label>
            <input 
                type="search" 
                id="input-search" 
                placeholder="Search for a country..." 
                className="input-search" 
                value={typedCountryName || ""}
                onChange={handleChangeCountryName} 
            />
        </div>  
    );
};

export default InputSearch;

import { useData } from "../../../data/DataContext";

const InputSearch = () => {   

    const { setTypedCountryName } = useData();

    const handleChangeCountryName = (e: any) => {
        setTypedCountryName(e.target.value);
    }

    return (
        <div className="input-container">
            <label htmlFor="input-search" style={{display: 'none'}}>Search for a country</label>
            <input type="search" id="input-search" placeholder="Search for a country..." className="input-search" onChange={handleChangeCountryName}></input>
        </div>  
    );
}
 
export default InputSearch;
const InputSearch = () => {
    return (
        <div className="input-container">
            <label htmlFor="input-search" style={{display: 'none'}}>Search for a country</label>
            <input type="search" id="input-search" placeholder="Search for a country..." className="input-search" ></input>
        </div>  
    );
}
 
export default InputSearch;
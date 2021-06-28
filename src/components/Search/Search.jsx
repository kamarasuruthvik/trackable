import React from 'react';

import './Search.css';

const Search=({searchQuery,submitQuery})=>{
    return(
        <div className="search-container">
            <input type="text" placeholder="Search" className="search-bar" 
            onChange={(e)=>searchQuery(e)} />
            <button type="submit" className="search-button" onClick={(e)=>submitQuery(e)}>
                Click
            </button>
        </div>
        
    );
}

export default Search;
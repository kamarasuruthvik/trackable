import React from 'react';

import './Search.css';

const Search=({searchQuery})=>{
    return(
        <div className="search-container">
            <input type="text" placeholder="Search" className="search-bar" 
            onChange={(e)=>searchQuery(e)} />
            <button type="submit" className="search-button" >
                Click
            </button>
        </div>
        
    );
}

export default Search;
import React from 'react';

import './Search.css';

const Search=()=>{
    return(
        <div className="search-container">
            <input type="text" placeholder="Search" className="search-bar"/>
            <button type="submit" className="search-button">
                Click
            </button>
        </div>
        
    );
}

export default Search;
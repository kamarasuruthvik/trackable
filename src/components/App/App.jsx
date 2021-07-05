import React, { useEffect, useState } from 'react';
import BMRcalculator from '../BMRcalculator/BMRcalculator';
import IntroComponent from '../IntroComponent/IntroComponent';
import Nav from '../Nav/Nav';
import ResultContainer from '../ResultContainer/ResultContainer';
import Search from '../Search/Search';
import './App.css';
const API_KEY = 
'978571a3bc397cf4cf7d8b0aab69651d';
const APP_ID= 
'd5f626b8';


const App =()=>{
    const [ recipes, setRecipes] = useState([]);
    const [ query, setQuery] = useState('');
    const [searchTerm,setSearchTerm]= useState('');
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    const URL=
    'https://api.edamam.com/api/recipes/v2?type=public&q='+ query +'&app_id=d5f626b8&app_key=978571a3bc397cf4cf7d8b0aab69651d';
    
    
    useEffect(()=>{
        console.log(URL);
        getRecipes();
    },[query]);


    const getRecipes=async ()=>{
        const response = await fetch(URL);
        const data = await response.json();
        setRecipes(data.hits);
        setLoadingSpinner(false);
        console.log(data.hits);
    };

    const searchQuery=e=>{
        
        return setSearchTerm(e.target.value);
    }

    const submitQuery=e=>{
        e.preventDefault();
        setLoadingSpinner(true);
        setQuery(searchTerm);
    }

    return(
        <div className="app-container">
            <Nav/>
            <IntroComponent/>
            <BMRcalculator/>

             <Search searchQuery={searchQuery} submitQuery={submitQuery} />
            {
                loadingSpinner?<div className="loading-spinner"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>:<ResultContainer recipes={recipes} />
            }
            
            
            


        </div>
        
        );

}

export default App;
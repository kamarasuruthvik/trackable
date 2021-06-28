import React, { useEffect, useState } from 'react';
import IntroComponent from '../IntroComponent/IntroComponent';
import Nav from '../Nav/Nav';
import ResultContainer from '../ResultContainer/ResultContainer';
import Search from '../Search/Search';
import './App.css';
const API_KEY = 
'978571a3bc397cf4cf7d8b0aab69651d';
const APP_ID= 
'd5f626b8';

const URL=
'https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=d5f626b8&app_key=978571a3bc397cf4cf7d8b0aab69651d'
const App =()=>{
    const [ recipes, setRecipes] = useState([]);
    const [ query, setQuery] = useState('');
    


    useEffect(()=>{
        getRecipes();

    },[]);


    const getRecipes=async ()=>{
        const response = await fetch(URL);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const searchQuery=e=>{
        console.log(e.target.value);
    }

    return(
        <div className="app-container">
            <Nav/>
            {/* <IntroComponent/> */}

            <Search searchQuery={searchQuery}/>
            <ResultContainer recipes={recipes}/>
            



        </div>
        
        );

}

export default App;
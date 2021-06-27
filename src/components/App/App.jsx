import React from 'react';
import IntroComponent from '../IntroComponent/IntroComponent';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import './App.css';
const API_KEY = 
'978571a3bc397cf4cf7d8b0aab69651d';
const APP_ID= 
'd5f626b8';

const App = ()=>{

    
    return(
        <div className="app-container">
            <Nav/>
            {/* <IntroComponent/> */}

            <Search/>

            
        </div>
        
        );

}

export default App;
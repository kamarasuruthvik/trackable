import React from 'react';
import './Nav.css';

const Nav = ()=>{
    return(
        <div className="nav-container">
            <div className="nav-header">
                <p>
                    Trackable 🎯
                </p>
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        <p>Diet Chart</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
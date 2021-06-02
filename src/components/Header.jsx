import React from 'react';
import '../assets/components/Header.css'
const Header = () => {
    return ( 
        <div className="Header">
            <div className="title">
                <h2>R&M</h2>
            </div>
            <div className="tabs">
                <b>o</b>
                <b>Characters</b>
                <b>Planets</b>
            </div>
        </div>
     );
}
 
export default Header;

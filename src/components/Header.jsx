import React from 'react';
import {Link} from 'react-router-dom'
import '../assets/components/Header.css'
const Header = () => {
    return ( 
        <div className="Header">
            <div className="title">
                <h2>R&M</h2>
            </div>
            <div className="tabs">
                <b>o</b>
                <Link className="link" to="/characters">Characters</Link>
                <Link className="link" to="/locations">Location</Link>
            </div>
        </div>
     );
}
 
export default Header;

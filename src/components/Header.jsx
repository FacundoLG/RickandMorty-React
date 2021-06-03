import React from 'react';
import {Link} from 'react-router-dom'
import { BsBrightnessHigh,BsSearch } from "react-icons/bs";
import '../assets/components/Header.css'
const Header = () => {
    return ( 
        <div className="Header">
            <Link className="title" to="/"><h2>R&M</h2></Link>
            <div className="inputContainer">
                <input className="input" type="text" />
                <button className="inputButton"><BsSearch/></button>
            </div>
            <div className="tabs">
                <BsBrightnessHigh className="icon"/> 
                <Link className="link" to="/characters">Characters</Link>
                <Link className="link" to="/locations">Locations</Link>
            </div>
        </div>
     );
}
 
export default Header;

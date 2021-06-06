import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { BsBrightnessHigh,BsSearch } from "react-icons/bs";
import '../assets/components/Header.css'
import '../assets/Theme/darkTheme.css'
import ThemeContext from '../context/ThemeContext';
const Header = ({setDark}) => {
    var theme = useContext(ThemeContext)
    return ( 
        <div className={theme ? "Header dark":"Header"}>
            <Link className="title" to="/"><h2>R&M</h2></Link>
            <div className="inputContainer">
                <input className="input" type="text" />
                <button className="inputButton"><BsSearch/></button>
            </div>
            <div className="tabs">
                <button className="iconButton" onClick={setDark}><BsBrightnessHigh className={theme ? "icon iconDark":"icon"}/ ></button>
                <Link className={theme ? "link dark": "link"} to="/characters">Characters</Link>
                <Link className={theme ? "link dark": "link"} to="/locations">Locations</Link>
            </div>
        </div>
     );
}
 
export default Header;

import React, { useContext } from 'react';
import '../assets/components/LocationCard.css'
import '../assets/Theme/darkTheme.css'
import ThemeContext from '../context/ThemeContext';
const LocationCard = ({imgSrc,name}) => {
    var theme = useContext(ThemeContext)
    return ( 
        <div className={theme ? "Location dark" : "Location"}>
            <div className="imgContainer">
                <img className="img"src={imgSrc} alt="" />
            </div>
            <div className="LocationData">
            <h4 className="data">{name}</h4>
            </div>
        </div>
     );
}
 
export default LocationCard;
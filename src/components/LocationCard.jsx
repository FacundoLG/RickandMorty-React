import React from 'react';
import '../assets/components/LocationCard.css'
const LocationCard = ({imgSrc,name}) => {
    return ( 
        <div className="Location">
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
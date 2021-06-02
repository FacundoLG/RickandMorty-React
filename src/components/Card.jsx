import React from 'react';
import '../assets/components/Card.css'
const Card = ({imgSrc,name}) => {
    return ( 
        <div className="card">
            <div className="imgContainer">
                <img className="img"src={imgSrc} alt="" />
            </div>
            <div className="cardData">
            <h4 className="data">{name}</h4>
            </div>
        </div>
     );
}
 
export default Card;
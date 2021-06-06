import React, { useState, useEffect, useContext } from 'react';
import Card from '../components/Card'
import ThemeContext from '../context/ThemeContext'

import '../assets/Theme/darkTheme.css'
import '../assets/pages/Characters.css'
const Characters = () => {
    const [characters,getCharacters] = useState([])
    var theme = useContext(ThemeContext)
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character`)
            .then(res => res.json())
            .then(data =>{
                console.log(data.results)
                getCharacters(data.results)
            })        
    },[])
    
    return ( 
    <div className={theme ? "Characters dark" : "Characters"}>
        <div className="cardContainer">
        {characters.map((character)=>
            <Card key={character.id} imgSrc={character.image} name={character.name}/>
        )}
        </div>
    </div> 
    );
}
 
export default Characters

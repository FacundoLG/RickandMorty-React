import React, { useState, useEffect, useContext } from 'react';
import {useParams} from 'react-router';
import Card from '../components/Card'
import ThemeContext from '../context/ThemeContext'

import '../assets/Theme/darkTheme.css'
import '../assets/pages/Characters.css'
const Characters = () => {
    console.log(useParams().name)
    var characterName = useParams().name || ""
    const [characters,getCharacters] = useState([])
    var theme = useContext(ThemeContext)
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}` )
            .then(res => res.json())
            .then(data =>{
                console.log(data.results)
                if(data.results){
                    getCharacters(data.results)
                }else{
                    getCharacters([])
                }
            })        
    },[characterName])
    
    return ( 
    <div className={theme ? "Characters dark" : "Characters"}>
        <div className="cardContainer">
        {characters.map((character)=>
            character.image? <Card key={character.id} imgSrc={character.image} name={character.name}/> : ""
        )}
        </div>
    </div> 
    );
}
 
export default Characters

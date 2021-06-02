import React, { useState, useEffect } from 'react';
import Card from '../components/Card'
import Header from '../components/Header'
import '../assets/pages/Characters.css'
const Characters = () => {
    const [characters,getCharacters] = useState([])

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character`)
            .then(res => res.json())
            .then(data =>{
                console.log(data.results)
                getCharacters(data.results)
            })        
    },[])
    
    return ( 
    <div className="Characters">
        <Header/>
        <div className="cardContainer">
        {characters.map((character)=>
            <Card key={character.id} imgSrc={character.image} name={character.name}/>
        )}
        </div>
    </div> 
    );
}
 
export default Characters

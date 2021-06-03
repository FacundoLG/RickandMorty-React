import React,{useEffect,useState} from 'react';
import Card from '../components/Card'
const Locations = () => {
    const [locations,getLocations] = useState([])
    
    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/location`)
            .then(res => res.json())
            .then(data =>{
                console.log(data.results)
                getLocations(data.results)
            })        
    },[])
    return ( 
        <div>
            <div className="cardContainer">
            {locations.map((character)=>
                <Card key={character.id} imgSrc={character.image} name={character.name}/>
            )}
        </div>
        </div>
     );
}
 
export default Locations;
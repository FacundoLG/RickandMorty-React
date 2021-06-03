import React,{useEffect,useState} from 'react';
import LocationCard from '../components/LocationCard';
import '../assets/pages/Locations.css'
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
            <div className="LocationContainer">
            {locations.map((location)=>
                <LocationCard key={location.id} imgSrc={location.image} name={location.name}/>
            )}
            </div>
        </div>
     );
}
 
export default Locations;
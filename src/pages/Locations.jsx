import React,{useContext, useEffect,useState} from 'react';
import LocationCard from '../components/LocationCard';
import ThemeContext from '../context/ThemeContext';
import '../assets/pages/Locations.css'
import '../assets/Theme/darkTheme.css'
const Locations = () => {
    const [locations,getLocations] = useState([])
    var theme = useContext(ThemeContext)
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
            <div className={theme ? "LocationContainer dark": "LocationContainer"}>
            {locations.map((location)=>
                <LocationCard key={location.id} imgSrc={location.image} name={location.name}/>
            )}
            </div>
        </div>
     );
}
 
export default Locations;
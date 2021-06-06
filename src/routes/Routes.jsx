import React, { useState } from 'react';
import Characters from '../pages/Characters'
import Header from '../components/Header'
import Locations from '../pages/Locations';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from '../pages/Home';
import ThemeContext from '../context/ThemeContext'
const Routes = () => {
    const [dark,setDark] = useState(false)

    const changeTheme =() =>{
        setDark(!dark)
        console.log("changed")
    }


    return ( 
        <div>
          <ThemeContext.Provider value={dark}>
            <BrowserRouter>
                <Header setDark={changeTheme}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/characters" component={Characters}/>
                <Route path="/characters/:name" component={Characters}/>
                <Route exact path="/locations" component={Locations}/>
            </BrowserRouter>
          </ThemeContext.Provider>
        </div>
     );
}
 
export default Routes;
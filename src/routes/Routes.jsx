import React from 'react';
import Characters from '../pages/Characters'
import Header from '../components/Header'
import Locations from '../pages/Locations';

import {BrowserRouter,Route} from 'react-router-dom'
import Home from '../pages/Home';
const Routes = () => {
    return ( 
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/characters" component={Characters}/>
                <Route exact path="/locations" component={Locations}/>
            </BrowserRouter>
        </div>
     );
}
 
export default Routes;
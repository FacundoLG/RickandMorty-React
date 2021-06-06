import React, {useContext} from 'react';
import ThemeContext from '../context/ThemeContext'
import '../assets/Theme/darkTheme.css'
import '../assets/pages/Home.css'
const Home = () => {
    var theme = useContext(ThemeContext)
    return ( 
        <div className={theme ? "Home dark": "Home"}>
           <div>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quo. Omnis rem quam quo est error nesciunt in quibusdam animi neque pariatur at architecto maxime, saepe a nam illo eaque ut quis hic ullam sapiente. Adipisci quo, atque at possimus sequi earum nemo neque, ad laboriosam quaerat eos maiores exercitationem illum pariatur provident placeat, vitae eum consectetur. Deleniti at inventore accusamus voluptatum perferendis? Pariatur, sint cupiditate nulla magni vel eveniet id dolorem enim ad consequatur. Blanditiis quidem corrupti similique explicabo doloremque neque deleniti, exercitationem odit eveniet dicta nisi, alias ipsa earum adipisci rem provident dolor ipsam, recusandae pariatur harum vero.
           </div>
        </div>
     );
}
 
export default Home;
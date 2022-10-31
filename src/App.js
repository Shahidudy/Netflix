import './App.css';
import React from "react"
import {originals,action} from './urls'
import NavBar from './Components/NavBar/NavBar';
import "./Components/NavBar/NavBar.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div>
         <NavBar/>
         <Banner/>
         <RowPost url={originals} title='Netflix Originals'/>
         <RowPost url={action} title='Action' isSmall />
    </div>
   
  );
}

export default App;

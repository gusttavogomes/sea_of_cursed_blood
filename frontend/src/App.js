import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegation from './components/Navegation';
import Roll from './components/Roll';
import Lore from './components/Lore' ;


function App() {
  return (
    <div className = "App">
      <Navegation/> 
      <Roll/>
      <Lore/>

    
    
    </div>
  );
}

export default App;

import React from 'react';
import Navegation from '../../components/Navegation';
import CharacterRule from '../../components/CharacterRule';
import GameplayRule from '../../components/GameplayRule';
import Footer from '../../components/Footer';

export default function Rules(){
    return (
        
        <div  >
            <Navegation/>
            <CharacterRule/>
            <GameplayRule/> 
            <Footer/>
        </div>
    );
}; 

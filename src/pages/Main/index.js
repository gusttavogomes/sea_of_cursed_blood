import React from 'react';
import Navegation from '../../components/Navegation';
import Presentation from '../../components/Presentation';
import CarouselPresentation from '../../components/CarouselPresentation';
import Footer from '../../components/Footer';


export default function Main(){
    return (
        <div>            
            <Navegation/>
            <CarouselPresentation/>
            <Presentation/>
            <Footer/>
        </div>
    );
};

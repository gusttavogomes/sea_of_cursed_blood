import React from 'react';
import Navegation from '../../components/Navegation';
import Presentation from '../../components/Presentation';
import CarouselPresentation from '../../components/CarouselPresentation';

export default function Main(){
    return (
        <div>            
            <Navegation/>
            <CarouselPresentation/>
            <Presentation/>
        </div>
    );
};

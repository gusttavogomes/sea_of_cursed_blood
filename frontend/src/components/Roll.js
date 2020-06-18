//import imagemMenu from '../image/giant.jpg';

import React from 'react';
import '../css/Roll.css';
import { Jumbotron, Button} from 'react-bootstrap';

export default function Roll() {
    return(
        <div id='roll'> 
            <div className="container">
                <Jumbotron>
                    <h1>Sea Of Cursed Blood</h1>
                    <p>
                        Uma campanha <i>sandbox</i> baseada na temática de exploração naval
                        em um mundo de diversos reinos em guerra onde os jogadores podem se manter leais ao rei
                        e serem corsários do reino, ou traçar seu próprio caminho virando piratas lutando
                        contra tudo e todos.
                    </p>
                    <p>
                        <Button variant="outline-light" className="buttonLink" >Roll20 da campanha</Button>
                    </p>
                </Jumbotron>
            </div>
            
        </div>
        
    );
}
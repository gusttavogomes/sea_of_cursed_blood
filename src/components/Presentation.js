import React from 'react';
import '../css/Presentation.css';
import { Jumbotron, Button} from 'react-bootstrap';

export default function presentation() {
    return(
        <div id='presentation'> 
            <div className="container">
                <Jumbotron className="jbt-presentation">
                    <h1>Sea Of Cursed Blood</h1>
                    <p>
                        Uma campanha <i>sandbox</i> de <i>Dungeons & Dragons 5e</i>, baseada na temática de exploração naval
                        em um mundo de diversos reinos em guerra onde os jogadores podem se manter leais ao rei
                        e serem corsários do reino, ou traçar seu próprio caminho virando piratas lutando
                        contra tudo e todos.
                    </p>
                    <Button variant="outline-info" className="buttonLink" id="link-beyond" href="https://www.dndbeyond.com/campaigns/1209016" target="_blank">Link da campanha no D&D Beyond</Button>                    
                </Jumbotron>
            </div>            
        </div>        
    );
}
import React from 'react';
import '../css/CharacterRule.css';
import { Jumbotron } from 'react-bootstrap';

export default function CharacterRule() {
    return(
        <div id='rule'> 
            <div className="container">
                <Jumbotron className="jbt-character-rule">
                    <h1>Criação de personagens</h1>
                    <h2>Raças Liberadas</h2>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
                        </p>                    
                    <h2>Classes Liberadas</h2>
                        <p>
                        As 12 classes das Regras Básicas e do Livro do Jogador estão liberadas, assim como a de <i>Eberron - Rising from the Last War</i>, totalizando: <i>Artificer, Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Warlock</i> e <i>Wizard </i>. <i>Blood Hunter</i> pode ser liberado de acordo com a vontade do Mestre. As subclasses estão todas liberadas dos principais livros oficiais. Eventuais suplementos oficiais podem ser incluidos, mas depende de cada Mestre aprovar ou não.
                        </p>                           
                </Jumbotron>
            </div>            
        </div>
    );
}
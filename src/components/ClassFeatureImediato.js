import React from 'react';
import '../css/ClassFeature.css';
import { Popover , Button, OverlayTrigger } from 'react-bootstrap';

const popover = (
  <Popover id="popover-basic">    
    <Popover.Content>
          <h4>Aumentar a moral</h4>
          <p id='descricao_habilidade'>
            O Imediato pode gerir o tempo de tripulação para garantir pausas
            extensas, providenciar instruções e aumentar a moral. Uma vez por dia, se o valor de
            qualidade da tripulação for 3 ou menor, o imediato pode realizar um teste de
            Persuasão (Carisma). Em um sucesso, o valor de qualidade da tripulação aumenta em
            1.
          </p>
          <h4>Aura de respeito</h4>
          <p id='descricao_habilidade'>
            Usando sua ação o imediato pode influenciar a mente de outras
            criaturas que tenham no mínimo 4 de inteligência e que possam vê lo e ouvi lo
            podendo fazê las ter medo ou serem encantadas por ele pela duração de 1 minuto. O
            DC alvo e baseado no carisma do imediato 8 + proficiência + carisma. O alvo deve
            fazer um teste de sabedoria ou será pego pelo efeito. O teste pode ser repetido no final
            do próximo turno da criatura afetada.
          </p>          
          </Popover.Content>
  </Popover>
); 

export default function PopUpImediato() {
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button variant="outline-light">Ver habilidades de Imediato</Button>
    </OverlayTrigger>
    
  );
}
import React from 'react';
import { Popover , Button, OverlayTrigger } from 'react-bootstrap';

const popover = (
  <Popover id="popover-basic">    
    <Popover.Content>
        <h4>Explorador nato</h4>
        <p>
          O capitão pode dar ou usar um bônus de +5 em testes de
          investigação, sobrevivência ou percepção relacionados à exploração de locais. 1 vez
          por descanso longo.
        </p>
        <h4>Mobilidade no navio</h4>
        <p>
          O capitão conhece o navio como a palma de sua mão, o
          capitão ganha metade de sua movimentação padrão como bônus quando esta dentro
          de seu navio.
        </p>
        <h4>Esconder-se</h4>
        <p>
          O capitão do navio pode engajar-se nesta atividade apenas se as
          condições climáticas restringem visibilidade, como uma névoa densa. O navio faz um
          teste de Destreza com um bônus igual ao valor de qualidade da tripulação para
          determinar se ele pode se esconder.
        </p>
        <h4>Ataquem homens</h4>
        <p>
          O capitão com sua ação bônus pode fazer com os tripulantes há
          15 pés dele possam gastar suas reações para realizar uma ataque em uma criatura que
          o capitão desejar. A habilidade recarrega com um <i>roll</i> de 5 ou 6 no D6.
        </p>
        </Popover.Content>
  </Popover>
); 

export default function PopUpCapitão() {
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button variant="outline-light">Ver habilidades de Capitão</Button>
    </OverlayTrigger>
    
  );
}
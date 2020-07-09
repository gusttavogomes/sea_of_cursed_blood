import React from 'react';
import { Popover , Button, OverlayTrigger } from 'react-bootstrap';

const popover = (
  <Popover id="popover-basic">    
    <Popover.Content>
      <h4>Reparar</h4>
        <p>
          O capitão com sua ação bônus pode fazer com os tripulantes há
          15 pés dele possam gastar suas reações para realizar uma ataque em uma criatura que
          o capitão desejar. A habilidade recarrega com um <i>roll</i> de 5 ou 6 no D6.
        </p>
        <h4>Fogo rápido:</h4>
        <p>
        Utilizando sua ação bônus todos os canhões do navio do contramestre
        ignoram a ação de recarga por 1 minuto é que tenham munições disponíveis. Esta
        habilidade só pode ser utilizada uma vez por dia. Sé o contramestre ficar inconsciente
        essa ação é encerrada.
        </p>
    </Popover.Content>
  </Popover>
); 

export default function PopUpContramestre() {
  return (
    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
      <Button variant="outline-light">Ver habilidades de Contramestre</Button>
    </OverlayTrigger>
  );
}
  


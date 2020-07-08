import React from 'react';
import '../css/ClassFeature.css';
import { Popover , Button, OverlayTrigger } from 'react-bootstrap';

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Contramestre</Popover.Title>
    <Popover.Content>
      <h4>Reparar</h4>
        <p id='descricao_habilidade'>
          O capitão com sua ação bônus pode fazer com os tripulantes há
          15 pés dele possam gastar suas reações para realizar uma ataque em uma criatura que
          o capitão desejar. A habilidade recarrega com um <i>roll</i> de 5 ou 6 no D6.
        </p>
    </Popover.Content>
  </Popover>
); 

export default function PopUpContramestre() {
  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="outline-light">Ver habilidades de Contramestre</Button>
    </OverlayTrigger>
    
  );
}
  


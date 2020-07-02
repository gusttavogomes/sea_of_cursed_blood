import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Capitão
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Explorador nato</h4>
          <p>
            O capitão pode dar ou usar um bônus de +5 em testes de
            investigação, sobrevivência ou percepção relacionados à exploração de locais. 1 vez
            por descanso longo.
          </p>
          <h4>Mobilidade no navio:</h4>
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
            o capitão desejar. A habilidade recarrega com um roll de 5 ou 6 no D6.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
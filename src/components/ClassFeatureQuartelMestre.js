import React from 'react';

export default function ClassFeatureQuartelMestre() {
  return(
      <div id="quartel-mestre">
        <h1>Quartel-Mestre</h1>
          <h3>Farejador de tesouros</h3>
          <p>
            O quartel-mestre pode rolar um teste de percepção   
            (sabedoria) para encontrar possíveis locais de tesouros em documentos/mapas. Se
            possuir perícia com o kit de cartógrafo pode optar por rolar um teste usando o kit.
          </p>
          <h3>Navegar</h3>
          <p>
            O quartel-mestre pode tentar prevenir que o grupo venha a se perder,
            realizando um teste de Sobrevivência (Sabedoria) quando o Mestre pedir. Uma vez
            por semana o navegador pode realizar um teste de Sabedoria com ferramentas de
            navegador para traçar uma rota mais rápida até o destino (diminuindo ¼ da viagem).
          </p>    
          <h3>Manobras no mar</h3>
          <p>
            O quartel-mestre pode realizar 3 possibilidades de navegação
            que duram até o próximo turno:
          </p>    
          <p>
            <strong>• Evasão:</strong> O navio se movimenta de forma defensiva dando CA baseado na
            tabela climática utilizando a reação.
          </p>
          <p>
            <strong>• A toda proa:</strong> Fazer com que o navio se movimente o dobro da movimentação
            utilizando a ação bônus.
          </p>    
          <p>
            <strong>• Reposicionamento:</strong> O navio e reposicionado de forma tática, dando vantagem
            nos ataques dos canhões utilizando a ação.
          </p> 
          <p>
            Se ele estiver fora do timão ele só pode utilizar uma destas possibilidades, uma
            de cada por dia.
          </p>        
    </div>
  );
}
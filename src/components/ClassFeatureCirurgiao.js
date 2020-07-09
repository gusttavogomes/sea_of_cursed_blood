import React from 'react';
import { Table, Image } from 'react-bootstrap';
import potion from'../image/potion_of_healing.png';

export default function ClassFeatureCirurgiao() {
    return(
        <div> 
            <h2>Cirurgião</h2>
            <h3>Fabricando kit médico</h3>
            <p>
            Para construir um kit-médico basta ter os itens que
            compõem o kit (Bandagem, pomada e talas) é 8 horas para construí-lo.    
            </p>
            <h3>Fabricando poções de cura</h3>
            <p>
            Para construir poções de cura utilizando a ala médica do
            navio utiliza-se a tabela abaixo:
            </p>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th><i>Potion of ...</i></th>
                        <th><i>HP</i> recuperado</th>
                        <th>Nível requerido</th>
                        <th>Tempo de criação</th>
                        <th>Ouro em recursos gastos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i>Healing</i></td>
                        <td>2d4 + 2</td>
                        <td>***</td>
                        <td>2H</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td><i>Greater healing</i></td>
                        <td>4d4 + 4</td>
                        <td>3</td>
                        <td>6H</td>
                        <td>75</td>
                    </tr>
                    <tr>
                        <td><i>Superior healing</i></td>
                        <td>8d4 + 8</td>
                        <td>6</td>
                        <td>2D</td>
                        <td>225</td>
                    </tr>
                    <tr>
                        <td><i>Supreme healing</i></td>
                        <td>10d4 + 20</td>
                        <td>11</td>
                        <td>5D</td>
                        <td>675</td>
                    </tr>
                </tbody>
            </Table>
            <Image src={potion} fluid />

            <h3>Neutralizar efeito</h3>
            <p>
            O cirurgião rola um teste medicina (sabedoria/inteligência) se ele
            souber como tratar o efeito o paciente é considerado em recuperação (relaxando) pela
            quantidade de dias mostrado na tabela de gravidade.
            </p>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th colSpan="2">Teste com o kit médico</th>
                    </tr>
                    <tr>
                        <th><i>Rolls</i></th>
                        <th>Dados de vida bônus (ferido)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1 a 7</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>8 - 15</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>16 - 23</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>24+</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </Table>

            <h3>Suturar ferimentos</h3>
            <p>
            Com sua ação o cirurgião pode rolar um teste de
            (inteligência/sabedoria) com o kit médico curar um aliado que não esteja sendo
            ameaçado por um inimigo a 5 feets dele baseado na tabela de suturar ferimentos e o
            dado de vida do ferido (uma carga do kit médico é gasta ao realizar essa ação). Após o
            uso a criatura não pode ser curada novamente por esse meio até realizar um descanso
            curto ou longo.
            </p>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th colSpan="2">Suturar ferimentos</th>
                    </tr>
                    <tr>
                        <th>Nível do Cirurgião</th>
                        <th>Nº de Dados de vida (ferido)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1 Dado + con (ferido) + sab/int (cirurgião)</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>2 Dados + con (ferido) + sab/int (cirurgião)</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>3 Dados + con (ferido) + sab/int (cirurgião)</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>4 Dados + con (ferido) + sab/int (cirurgião)</td>
                    </tr>
                    <tr>
                        <td>17</td>
                        <td>5 Dados + con (ferido) + sab/int (cirurgião)</td>
                    </tr>
                </tbody>
            </Table>

            
        </div>
    );
}


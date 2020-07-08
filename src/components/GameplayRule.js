import React from 'react';
import '../css/GameplayRule.css';
import { Jumbotron, Button} from 'react-bootstrap';

import PopUpContramestre from './ClassFeatureContramestre.js'; //check later

import PopUpImediato from './ClassFeatureImediato.js';
import PopUpCapitao from './ClassFeatureCapitao.js';

export default function CharacterRule() { 
    return(
        <div id='rule'> 
            <div className="container">
                <Jumbotron className="jbt-gameplay-rule">                                     
                    <h1>Gerenciamento do Navio</h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
                        </p>   
                    <h1>Mecânicas dos Oficiais</h1>
                    <p> Para comandar o navio na aventura, é necessário uma hieraquia de comando e funções e responsabilidades designadas a certas pessoas sendo os principais dessa estrutura os Oficiais. São ao todo seis oficiais: <b> Capitão, Imediato, Contramestre, Quartel-Mestre, Cirurgião e Cozinheiro</b>. Além da tribulação normal que varia de acordo com o navio é necessário que se tenha tais oficiais para que a campanha funcione melhor. Claro que se não tiver jogadores suficientes, tais cargos podem ser substituídos por NPC's. Cada oficial tem habilidades habilidades para o combate ou fora dele, alguns com mais que os outros, mas nada impede do Mestre alterar tais habilidades ou adicionar novas. A seguir são descrito as funções básicas de cada oficial e nos botões expandem as informações mostrando as habilidades de cada oficial e as informações sobre cada uma dessa mecânicas.</p>
                    
                    <h2>Capitão</h2>
                        <p>O capitão emite ordens. Os melhores capitães possuem altos valores de Inteligência e Carisma, bem como proficiência com veículos aquáticos e nas perícias Persuasão e Intimidação.</p>                        
                    <PopUpCapitao/>
                    
                    <h2>Imediato</h2>
                        <p>Este especialista mantém a moral da tripulação alta ao prover supervisão de perto, encorajamento e disciplina. Um imediato se beneficia de um alto valor de Carisma, bem como proficiência nas perícias Intimidação e Persuasão.</p> 
                    <PopUpImediato/>
                    
                    <h2>Contramestre</h2>
                        <p>O Contramestre (também conhecido como pequeno oficial) provê conselhos técnicos para o capitão e os tripulantes e lidera os esforços de reparo e manutenção. Um bom contramestre possui um grande valor de atributo em Força, bem como proficiência com ferramentas de carpinteiro e na perícia Atletismo.</p>  
                    <PopUpContramestre/>   
                    
                    <h2>Quartel-Mestre</h2>
                        <p>O Quartel-Mestre traça o curso do navio, confiando em conhecimentos de mapas náuticos e no estudo do clima e das condições do mar. Um quartel-mestre confiável tende a possuir um valor alto de Sabedoria, bem como proficiência nas ferramentas de navegador e na perícia Natureza.</p>  
                    <Button variant="outline-light">Ver habilidades de Quartel-Mestre</Button>  
                   
                    <h2>Cirurgião</h2>
                        <p>O cirurgião do navio pode cuidar de machucados, impede doenças de se espalhar por todo o navio e supervisiona o saneamento. Um cirurgião capaz se beneficia de altos valores de Inteligência ou sabedoria, bem como proficiência em kits de herbalismo e na perícia Medicina.</p>  
                    <Button variant="outline-light">Ver habilidades de Cirurgião</Button>  
                    
                    <h2>Cozinheiro</h2>
                        <p>O cozinheiro de um navio trabalha com os limitados ingredientes a bordo de um navio para fazer alimentos. Um cozinheiro habilidoso mantém a moral da tripulação em boa forma, enquanto que um cozinheiro ruim diminui o desempenho de toda a tripulação. Um cozinheiro talentoso tem valores de Sabedoria e destreza altos, bem como proficiências em suprimentos de cervejeiro e utensílios de cozinha.</p>  
                    <Button variant="outline-light">Ver habilidades de Cozinheiro</Button>          
                </Jumbotron>
            </div>
            
        </div>
        
    );
}
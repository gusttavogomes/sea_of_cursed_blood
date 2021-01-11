import React from 'react';
import '../css/Player.css';
import { Jumbotron, Figure, Button, Navbar, Container} from 'react-bootstrap';

import { Link } from "react-scroll"; //https://scotch.io/tutorials/implementing-smooth-scrolling-in-react

import Kroll from '../image/Kroll.jpg'
//import Niel from '../image/Niel.jpeg'
import Dagger from '../image/Dagger.jpg'
import Los from '../image/Los-ren.jpg'
import Horv from '../image/Horv.jpg'
import Bhelmur from '../image/Bhelmur.jpg'
import Kev from '../image/Kev.png'
//Termos em ingles (alguns) https://pt.linkedin.com/pulse/vocabul%C3%A1rio-t%C3%A9cnico-em-ingl%C3%AAs-para-mar%C3%ADtimos-robson-comte

export default function Player() {
    return(
        <div className='player-menu' > 
            
            <Navbar collapseOnSelect expand="lg" variant="dark"  center className="color-nav"  >
            
                <Container >               
                    <Link 
                        to={'Kroll'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button className="player-menu-button" variant="outline-light" size="lg" block >Kroll</Button>
                        {/**<Button className="player-menu-button" variant="outline-light" size="lg" block >Kroll - Capitão</Button> */}
                    </Link>
                     
                
                    <Link 
                        to={'Kevrnan'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button className="player-menu-button" variant="outline-light" size="lg" block>Kevrnan</Button>
                        {/*<Button className="player-menu-button" variant="outline-light" size="lg" block>Kev - Imediato</Button>*/}
                    </Link>
                    
                
                    <Link 
                        to={'D4G-G3R'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button className="player-menu-button" variant="outline-light" size="lg" block>D4G-G3R</Button>
                        {/*<Button className="player-menu-button" variant="outline-light" size="lg" block>Contramestre</Button>*/}
                    </Link>
                    
                
                    <Link 
                        to={'Los-Ren'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button className="player-menu-button" variant="outline-light" size="lg" block>Los-Ren</Button>
                        {/*<Button className="player-menu-button" variant="outline-light" size="lg" block>Quartel-Mestre</Button>*/}
                    </Link>
                    
                
                    <Link 
                        to={'Horv'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button className="player-menu-button" variant="outline-light" size="lg" block >Horv</Button>
                        {/*<Button className="player-menu-button" variant="outline-light" size="lg" block >Cirurgião</Button>*/}
                    </Link>
                    
                
                    <Link 
                        to={'Bhelmur'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button className="player-menu-button" variant="outline-light" size="lg" block>Bhelmur</Button>
                        {/*<Button className="player-menu-button" variant="outline-light" size="lg" block>Cozinheiro</Button>*/}
                    </Link>
                </Container>
            </Navbar>
            
            <div className="container">
                <Jumbotron className="jbt-player">
                    <div id="Kroll">
                        <h1>Kroll Mineaux - Capitão</h1>
                        <Figure>
                            <Figure.Image
                                width={385}
                                height={384.3173758865248}
                                alt="Kroll"
                                src={Kroll}
                            />
                        </Figure>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
                        </p>
                        <Button variant="dark" className="buttonLink2" id="link-beyond-kroll" href="https://www.dndbeyond.com/characters/31829158" target="_blank">Ficha Kroll - D&D Beyond</Button>                    
                    </div>
                </Jumbotron>
            </div>      
        <div/>       
            <div className="container">
                <Jumbotron className="jbt-player">
                    <div id="Kevrnan">
                            
                        <h1>Kevrnan Lamm - Imediato/Cozinheiro</h1>
                        <Figure>
                            <Figure.Image
                                width={385}
                                height={498.3904109589041}
                                alt="Kev"
                                src={Kev}
                            />
                        </Figure>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
                        </p> 
                    </div>
                </Jumbotron>
            </div>      
        <div/>       
            <div className="container">
                <Jumbotron className="jbt-player">
                    <div id="D4G-G3R">

                        <h1>D4G-G3R - Contramestre</h1>
                        <Figure>
                            <Figure.Image
                                width={385}
                                height={427.1917808219178}
                                alt="Dagger"
                                src={Dagger}
                            />
                        </Figure>
                        <p>
                            Construído a base de metal e madeira e vestindo apenas sua armadura, Dagger é um dos raros Warforged da terrível Last War que assolou Khorvaire. Agora por seus motivos e ambições ele reside ao lado de Los-Ren para protegê-la e guardar o navio como Contra-Mestre.
                        </p> 
                        <Button variant="dark" className="buttonLink2" id="link-beyond-kroll" href="https://www.dndbeyond.com/characters/39528876" target="_blank">Ficha D4G-G3R - D&D Beyond</Button>                                            
                    </div>
                </Jumbotron>
            </div>      
        <div/>       
            <div className="container">
                <Jumbotron className="jbt-player">
                    <div id="Los-Ren">

                        <h1>Los-Ren - Quartel Mestre</h1>
                        <Figure>
                            <Figure.Image
                                width={385}
                                height={567}
                                alt="Los"
                                src={Los}
                            />
                        </Figure>
                        <p>
                            Los-ren é a Quartel-master do navio é uma pessoa séria e tenta intimidar, porém vira uma grande aliada quando se trata de brigas e uma confusão divertida
                        </p> 
                    </div>
                </Jumbotron>
            </div>      
        <div/>       
            <div className="container">
                <Jumbotron className="jbt-player">
                    <div id="Horv">

                        <h1>Horv Stickyfeet - Cirurgião</h1>
                        <Figure>
                            <Figure.Image
                                width={385}
                                height={529.816513761468}
                                alt="Horv"
                                src={Horv}
                            />
                        </Figure>
                        <p>
                            Horv Stickfeet é um jovem <i>grung</i> que vivia com sua pequena tribo nas florestas do noroeste de Shirstan. A vida pacata foi interrompida  pela guerra generalizada que levou a independência do reino. Horv foi introduzido a medicina na época e ajudou os rebeldes nas suas táticas de guerrilha, tanto em combate como dando assistência médica aos feridos das operações. No final do conflito, Horv conheceu Kroll, um <i>tiefling</i> combatente carismático que convenceu Horv a se juntar a sua tripulação e virar um corsário pelo reino de Shirstan. 
                        </p> 
                        
                        <Button variant="dark" className="buttonLink2" id="link-beyond-kroll" href="https://ddb.ac/characters/29517910/yFC9zN" target="_blank">Ficha Horv - D&D Beyond</Button> 
                    </div>
                </Jumbotron>
            </div>      
        <div/>       
            <div className="container">
                <Jumbotron className="jbt-player">
                    <div id="Bhelmur">
                        <h1>Bhelmur - Novato</h1>
                        <Figure>
                            <Figure.Image
                                width={385}
                                height={369.3654822335025}
                                alt="Bhelmur"
                                src={Bhelmur}
                            />
                        </Figure>
                        <p>
                            Bhelmur é um anão veterano dos mares, tendo as estrelas como seus olhos, vendo as águas como uma grande casa e todos que vagam nela como diferentes famílias e entendendo as batalhas que ocorrem como parentes desesperados tentando sobreviver.
                        </p> 
                    </div>                          
                </Jumbotron>
            </div> 
            
        </div>
        
    );
}
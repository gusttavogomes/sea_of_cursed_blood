import React from 'react';
import '../css/Player.css';
import { Jumbotron, Figure, Button, Navbar, Container} from 'react-bootstrap';

import { Link } from "react-scroll"; //https://scotch.io/tutorials/implementing-smooth-scrolling-in-react

import Kroll from '../image/Kroll.jpg'
import Niel from '../image/Niel.jpeg'
import Dagger from '../image/Dagger.jpg'
import Los from '../image/Los-ren.jpg'
import Horv from '../image/Horv.jpg'
import Kevrnan from '../image/Kevrnan.png'
//Termos em ingles (alguns) https://pt.linkedin.com/pulse/vocabul%C3%A1rio-t%C3%A9cnico-em-ingl%C3%AAs-para-mar%C3%ADtimos-robson-comte

export default function Player() {
    return(
        <div id='player' > 
            <Navbar collapseOnSelect expand="lg" variant="dark"  center className="color-nav"  >
                <Container >                
                    <Link 
                        to={'captain'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button variant="outline-light">Capitão</Button>
                    </Link>
                
                    <Link 
                        to={'chief-officer'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button variant="outline-light">Imediato</Button>
                    </Link>
                
                    <Link 
                        to={'bo-sun'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button variant="outline-light">Contramestre</Button>
                    </Link>
                
                    <Link 
                        to={'quartermaster'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button variant="outline-light">Quartel-Mestre</Button>
                    </Link>
                
                    <Link 
                        to={'surgeon'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button variant="outline-light">Cirurgião</Button>
                    </Link>
                
                    <Link 
                        to={'cook'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button variant="outline-light">Cozinheiro</Button>
                    </Link>
                        
                    
                </Container>
            </Navbar>
            
            <div className="container">
                
                

                <Jumbotron className="jbt-player">
                    <div id="captain">
                        <h1>Kroll - Capitão</h1>
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
                    </div>
                </Jumbotron>
            </div>      
        <div/>       
            <div className="container">
                <Jumbotron className="jbt-player">
                    <div id="chief-officer">
                            
                        <h1>Niel - Imediato</h1>
                        <Figure>
                            <Figure.Image
                                width={385}
                                height={498.3904109589041}
                                alt="Niel"
                                src={Niel}
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
                    <div id="bo-sun">

                        <h1>Dagger - Contramestre</h1>
                        <Figure>
                            <Figure.Image
                                width={385}
                                height={427.1917808219178}
                                alt="Dagger"
                                src={Dagger}
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
                    <div id="quartermaster">

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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
                            </p> 
                    </div>
                </Jumbotron>
            </div>      
        <div/>       
            <div className="container">
                <Jumbotron className="jbt-player">
                    <div id="surgeon">

                        <h1>Horv - Cirurgião</h1>
                        <Figure>
                            <Figure.Image
                                width={385}
                                height={529.816513761468}
                                alt="Horv"
                                src={Horv}
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
                    <div id="cook">


                        <h1>Kevrnan - Cozinheiro</h1>
                        <Figure>
                            <Figure.Image
                                width={385}
                                height={369.3654822335025}
                                alt="Kevrnan"
                                src={Kevrnan}
                            />
                        </Figure>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
                            </p> 
                    </div>                          
                </Jumbotron>
            </div> 
            
        </div>
        
    );
}
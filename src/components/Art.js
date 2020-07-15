//Agradecer os artistas, falar que o site não tem fins lucrativos que é apenas para fazer parte de um portifólio de programação
//Linkar todos os artistas que souber a fonte e colocar caso algum artista tiver arte vinculada e quiser que remova ou que tenha o nome colocado no site, entre em contato
//texto em Pt-Br e English 

//Jenna Drummond 
//http://jendart.com

//silkynoire
//https://www.deviantart.com/silkynoire
//https://www.instagram.com/silkynoire

import React from 'react';
import '../css/Art.css';
import { Container, Button} from 'react-bootstrap';

export default function Art() {
    return(
        <div id='art'> 
            <Container>
                <div className="container-art">
                    <h1>Sea of Cursed Blood</h1>
                        
                        <p>
                            Agradecemos todos os artistas a seguir, por realizarem tais artes tão magníficas que possibilitaram que essa campanha de <i>Dungeon & Dragons</i> ganhasse uma representação visual. 
                        </p>

                        <h2>Jenna Lauren Drummond </h2>                        
                            <p>http://jendart.com</p>
                            <p>jdrummondart@gmail.com</p>

                        <h2>silkynoire </h2>
                            <p>https://www.deviantart.com/silkynoire</p>
                            <p>https://www.instagram.com/silkynoire</p>

                        <h2>Jenna Lauren Drummond </h2>
                            <Button variant="outline-light"  id="link-site-jendart" href="http://jendart.com" target="_blank">http://jendart.com</Button>                    
                            <Button variant="outline-light"  id="link-email-jendart" href="mailto:jdrummondart@gmail.com" target="_blank">jdrummondart@gmail.com</Button>                    


                        <h2>silkynoire </h2>
                            <Button variant="outline-light"  id="link-deviantart-silky" href="https://www.deviantart.com/silkynoire" target="_blank">https://www.deviantart.com/silkynoire</Button>                    
                            <Button variant="outline-light"  id="link-instagram" href="https://www.instagram.com/silkynoire" target="_blank">https://www.instagram.com/silkynoire</Button>                    


                        <p>
                            O nosso mais sincero obrigado a esses artistas e por favor, entre no meios de comunicação desses artistas e conheçam o trabalho dele e apoie!
                        </p>  

                        <p>
                            Nem todas as artes usadas, possuem identicação clara de quem foi o autor, então caso conheça, por favor entre em contato que providenciaremos a alteração no site para colocar as informações do artista. 
                            Caso você artista tenha alguma arte usada indevidamente, pode entrar em contato que retiraremos tal imagem.                        
                            Ou caso queira que sua arte seja esposta em nosso site, sinta-se a vontade para nos enviar seu trabalho que também divulgaremos seus contatos.
                        </p>
                        
                        <Button variant="outline-light">Contactar desenvolvedores</Button>
                        <p>
                        Site feito por fãs de <i>Dungeon & Dragons</i> sem fins lucrativos, sendo usado apenas como portfólio de desenvolvimento <i>web</i> .
                        </p>

                        
                          
                </div>
            </Container>
        </div>        
    );
}
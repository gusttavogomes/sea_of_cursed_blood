//Agradecer os artistas, falar que o site não tem fins lucrativos que é apenas para fazer parte de um portifólio de programação
//Linkar todos os artistas que souber a fonte e colocar caso algum artista tiver arte vinculada e quiser que remova ou que tenha o nome colocado no site, entre em contato
//texto em Pt-Br e English 

//Jenna Drummond 
//http://jendart.com
//https://twitter.com/jendart
//https://www.twitch.tv/jdrummo

//silkynoire
//https://www.deviantart.com/silkynoire
//https://www.instagram.com/silkynoire
// Incons line style

import React from 'react';
import '../css/Art.css';
import { Container, Button} from 'react-bootstrap';

import logo from "../image/skull-dice2.png";

import deviantart from '../image/deviantart.png';
import web from '../image/web.png';
import instagram from '../image/instagram.png';
import email from '../image/google-plus.png';
import twitter from '../image/twitter.png';

export default function Art() {
    return(
        <div id='art'> 
            <Container>
                <div className="container-art">
                
                    <h1>Sea of Cursed Blood</h1>
                    <p>
                        Agradecemos todos os artistas a seguir, por realizarem tais artes tão magníficas que possibilitaram que essa campanha de <i>Dungeon & Dragons</i> ganhasse uma representação visual. 
                    </p> 

                    <h2> Jenna <i>'jendart'</i> Lauren Drummond  </h2>
                    <Button className="link-art" variant="primary"  id="link-site-jendart" href="http://jendart.com" target="_blank">
                        <img src={web} alt="Web Page"/>
                        <i>Web Page</i>
                    </Button>    

                    <Button className="link-art" variant="primary"  id="link-twitter-jendart" href="https://twitter.com/jendart" target="_blank">
                        <img src={twitter} alt="twitter"/>
                        @jendart
                    </Button>   

                    <Button className="link-art" variant="primary"  id="link-email-jendart" href="mailto:jdrummondart@gmail.com" target="_blank">
                        <img src={email} alt="email"/>
                        G-mail
                    </Button>      

                    <h2>silkynoire </h2>
                    <Button className="link-art" variant="primary" id="link-deviantart-silky" href="https://www.deviantart.com/silkynoire" target="_blank">
                        <img src={deviantart} alt="deviantart-silkynoire"/>
                        silkynoire
                    </Button>                    
                    <Button className="link-art" variant="primary"  id="link-instagram-silky" href="https://www.instagram.com/silkynoire" target="_blank">
                        <img src={instagram} alt="instagram-silkynoire"/>
                        @silkynoire
                    </Button>  

                    <p> 
                        O nosso mais sincero obrigado a esses artistas e por favor, entre no meios de comunicação desses artistas e conheçam o trabalho dele e apoie!
                    </p>  
                    
                    <img
                        alt="Sea of Cursed Blood Logo"
                        src={logo}
                        width="105"
                        height="150"
                        className="d-inline-block align-top"
                    />{' '}

                    <p id="space-between-end">
                        Nem todas as artes usadas, possuem identicação clara de quem foi o autor, então caso conheça, por favor entre em contato que providenciaremos a alteração no site para colocar as informações do artista. 
                        Caso você artista tenha alguma arte usada indevidamente, pode entrar em contato que retiraremos tal imagem.                        
                        Ou caso queira que sua arte seja esposta em nosso site, sinta-se a vontade para nos enviar seu trabalho que também divulgaremos seus meios de contatos.
                    </p>
                    

                    <Button variant="primary" id="email-contato" href="mailto:seaofcursedblood@gmail.com" target="_blank">Contactar desenvolvedores</Button><div><p> </p></div>
                </div>
            </Container>
            
        </div>        
    );
}
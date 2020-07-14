import React from 'react';
import '../css/Footer.css';
import { Navbar, Container, Button } from 'react-bootstrap';
//import Img04 from '../image/wood10.jpg';
import { Link } from "react-scroll"; //https://scotch.io/tutorials/implementing-smooth-scrolling-in-react
//Footer fixo no final da pagina(fixed) ou mais flexivel(sticky) aparecendo só quando chegar no final?

export default function Footer() {
    return(
       <div>
           <Navbar collapseOnSelect expand="lg" variant="dark"  sticky="bottom" className="color-nav">
                <Container>
                    <Navbar.Brand href="#" >Sea Of Cursed Blood</Navbar.Brand>
                    <Link 
                        to={'navegation'}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {2000}
                    >
                        <Button variant="outline-light">Voltar ao topo</Button>
                    </Link>
                </Container>
            </Navbar>
       </div>
        
    );
}
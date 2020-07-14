import React from 'react';
import '../css/Navegation.css';
import { Navbar,Nav, NavDropdown} from 'react-bootstrap';

//Menu mostrando o tempo todo (fixed) ou só quando tiver no topo(sticky)?

export default function Navegation() {
    return(
        <div id='navegation'> 
            <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" >
            <Navbar.Brand href="/">Sea of Cursed Blood</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/history" >Cenário</Nav.Link>
                <NavDropdown title="Regras" id="collasible-nav-dropdown-cenario">
                    <NavDropdown.Item href="/rules">Criação de PC's</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/rules#gerenciamento-do-navio">Gerenciamento do Navio</NavDropdown.Item>
                    <NavDropdown.Item href="/rules#mecanicas-dos-oficiais">Mecânicas dos oficiais</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href="/player-character">Player Character (PC's)</Nav.Link>
                <NavDropdown title="NPC's" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Kingdon of Shirstan</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Kingdon of Wasins</NavDropdown.Item> 
                    <NavDropdown.Divider />                   
                    <NavDropdown.Item href="#action/3.3">Rynian Empire</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Velsian Empire</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Westian Empire</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6">Rynian Empire</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.7">Rale</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.8">Alteria</NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.9">Principality of Karith</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.10">Principality of Laconbia</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Artistas/Artists</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    F
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            
        </div>
        
    );
}
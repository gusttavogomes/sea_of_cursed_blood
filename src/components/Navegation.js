import React from 'react';
import '../css/Navegation.css';
import { Navbar,Nav, NavDropdown} from 'react-bootstrap';
import logo from "../image/skull-dice2.png";



//Menu mostrando o tempo todo (fixed) ou só quando tiver no topo(sticky)?

export default function Navegation() {
    return(        
        <div id='navegation'> 
            <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" >
				<Navbar.Brand href="/">
					<img
						alt="Sea of Cursed Blood Logo"
						src={logo}
						width="42"
						height="60"
						className="d-inline-block align-top"
					/>{' '}
						{/*Sea of Cursed Blood*/}
						<h4 id="logo-name">Sea of Cursed Blood</h4>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/history" >História</Nav.Link>
						<NavDropdown title="Regras" id="collasible-nav-dropdown-cenario">
							<NavDropdown.Item href="/rules">Criação de PC's</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/rules#gerenciamento-do-navio">Gerenciamento do Navio</NavDropdown.Item>
							<NavDropdown.Item href="/rules#mecanicas-dos-oficiais">Mecânicas dos oficiais</NavDropdown.Item>
						</NavDropdown>
						
						<Nav.Link href="/player-character">Player Character (PC's)</Nav.Link>						
					</Nav>
					<Nav>
						<Nav.Link href="/art">Artistas/Artists</Nav.Link>                
					</Nav>
				</Navbar.Collapse>
            </Navbar>            
        </div>
        
    );
}
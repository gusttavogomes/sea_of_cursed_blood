import React from 'react';
import '../css/Navegation.css';
import { Navbar,Nav, NavDropdown} from 'react-bootstrap';
import logo from "../image/skull-dice2.png";

//npm run dev = executar app no desenvolvimento


//Menu mostrando o tempo todo (fixed) ou só quando tiver no topo(sticky)?

export default function Navegation() {
    return(        
        <div id='navegation'> 
            <Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" >
				<Navbar.Brand href="/">
					<img
						alt="Sea of Cursed Blood Logo"
						src={logo}
						width="63"
						height="90"
						className="d-inline-block align-top"
					/>{' '}
				</Navbar.Brand>
				{/*<Navbar.Brand href="/">Sea of Cursed Blood</Navbar.Brand>	*/}{/*Caso eu queira com fonte normal, descomentar*/}
				<Navbar.Brand href="/" ><h3>Sea Of Cursed Blood</h3></Navbar.Brand> 			
				
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
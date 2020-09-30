import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navegador = () => {
    return(
        <Navbar bg="light" expand="lg" style={{ margin: '0', padding: '0'}}>
            <Navbar.Brand href="#home">
                <Link href="/">
                    <img src="img/logo.png" alt="" title="" style={{width: '200px'}} />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* 
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/">
                        <a>INICIO</a>
                    </Link>
                    <Link href="/ssr-page">
                        <a>SERVICIOS</a>
                    </Link>
                    <Link href="/ssr-page">
                        <a>CONTACTO</a>
                    </Link>
                </Nav>
            </Navbar.Collapse>
            */}
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Link href="tel:5562353054"><a className="eltel">(55)6235-3054</a></Link>
                    <Link href="tel:5543177176"><a className="eltel">(55)4317-7176</a></Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navegador;
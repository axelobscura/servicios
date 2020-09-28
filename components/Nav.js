import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navegador = () => {
    return(
        <Navbar bg="light" variant="dark">
            <Navbar.Brand href="#home">
                <Link href="/">
                    <img src="img/logo.png" alt="" title="" style={{width: '200px'}} />
                </Link>
            </Navbar.Brand>
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
        </Navbar>
    )
}

export default Navegador;
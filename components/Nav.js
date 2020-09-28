import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navegador = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/ssr-page">
                    <a>Server Side Rendering</a>
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Navegador;
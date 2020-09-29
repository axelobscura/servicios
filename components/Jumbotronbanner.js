import React from 'react';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Jumbotronbanner() {
    return (
        <Jumbotron fluid className="jumbo">
            <Container>
                <h1>Servicio Garantizado</h1>
                <p>
                Atendemos sus equipos<br/>En su Domicilio
                </p>
            </Container>
        </Jumbotron>
    )
}
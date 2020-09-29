import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function BannerDos() {
    return (
        <Container fluid={true} className="bannerDos">
            <Row>
                <Col>
                    <h1>Reparamos sus equipos de Línea Blanca</h1>
                    <hr/>
                    <p><b>Contamos con técnicos capacitados</b><br/>para resolver cada uno de los problemas específicos de la falla que presenta su equipo</p>
                </Col>
            </Row>
        </Container>
    )
}
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Banner() {
    return (
        <Container fluid={true} className="banner">
            <Row>
                <Col className="m-0 p-0">
                    <h1>SERVICIO TÉCNICO</h1>
                    <p>Somos el servicio de linea blanca que  atendemos todos sus requerimientos<br/>para lavadoras, secadoras, lavasecadoras, congeladores,  refrigeradores, minisplit, etc</p>
                    <p className="zonas">CDMX, Estado de México, Toluca, Metepec, Lerma, Pachuca</p>
                </Col>
            </Row>
        </Container>
    )
}
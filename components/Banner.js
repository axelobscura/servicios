import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Banner(props) {
    return (
        <Container fluid={true} className="banner" style={{background: `${props.backColor}`}}>
            <Row>
                <Col>
                    <h1>SERVICIO TÉCNICO</h1>
                    <p>Somos el servicio de linea blanca que  atendemos todos sus requerimientos<br/>para lavadoras, secadoras, lavasecadoras, congeladores,  refrigeradores, etc</p>
                    <p className="zonas">CDMX, Estado de México, Toluca, Metepec, Lerma</p>
                </Col>
            </Row>
        </Container>
    )
}
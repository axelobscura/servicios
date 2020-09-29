import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer(props) {
    return (
        <Container fluid={true} className="banner" style={{background: `${props.backColor}`}}>
            <Row>
                <Col>
                    <h1>SERVICIO TÉCNICO</h1>
                    <p><small>Somos un centro de servicio independiente a la marca Samsung, las imagenes, logotipo y textos son utilizados unicamente de manera referencial, estos son propiedad de la marca registrada, no de este sitio web. Nos desnlindamos de cualquier problema comercial de marca.</small></p>
                </Col>
            </Row>
        </Container>
    )
}
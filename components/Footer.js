import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link';

export default function Footer(props) {
    return (
        <Container fluid={true} className="banner" style={{background: `${props.backColor}`}}>
            <Row>
                <Col>
                    <h1>SERVICIO TÉCNICO ESPECIALIZADO</h1>
                    <p><small>Somos un centro de servicio independiente a la marca Samsung,<br/>las imagenes, logotipo y textos son utilizados unicamente de manera referencial,<br/>estos son propiedad de la marca registrada, <br/>no de este sitio web. Nos desnlindamos de cualquier problema comercial de marca.</small></p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link href="tel:5562353054"><a className="btn btn-default eltel">(55)6235-3054</a></Link>
                    <Link href="tel:5543177176"><a className="btn btn-default eltel">(55)4317-7176</a></Link>
                </Col>
            </Row>
        </Container>
    )
}
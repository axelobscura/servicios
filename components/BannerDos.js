import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function BannerDos() {
    return (
        <Container fluid={true} className="bannerDos">
            <Row>
                <Col styleName="mb-5">
                    <h1>Reparamos sus equipos de Línea Blanca</h1>
                    <hr/>
                    <p><b>Contamos con técnicos capacitados</b><br/>para resolver cada uno de los problemas específicos de la falla que presenta su equipo</p>
                </Col>
            </Row>
            <Row className="mb-5 mt-5">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="img/lava2.jpg" alt="Servicio Técnico - SERVICIO PROFESIONAL DE MANTENIMIENTO Y REPARACIÓN ESPECIALIZADO SAMSUNG" title="Servicio Técnico - SERVICIO PROFESIONAL DE MANTENIMIENTO Y REPARACIÓN ESPECIALIZADO SAMSUNG" />
                        <Card.Body>
                            <Card.Title>Somos Especialistas</Card.Title>
                            <hr/>
                            <Card.Text>
                            Nuestros técnicos están certificados para poder realizar su servicio de manera segura, le recomendamos no exponer su equipo en manos inexpertas.
                            </Card.Text>
                            <Button variant="primary">VER MÁS</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="img/lava1.jpg" alt="Servicio Técnico - SERVICIO PROFESIONAL DE MANTENIMIENTO Y REPARACIÓN ESPECIALIZADO SAMSUNG" title="Servicio Técnico - SERVICIO PROFESIONAL DE MANTENIMIENTO Y REPARACIÓN ESPECIALIZADO SAMSUNG" />
                        <Card.Body>
                            <Card.Title>Nosotros lo Reparamos</Card.Title>
                            <hr/>
                            <Card.Text>
                            Atendemos cualquier equipo de linea blanca, llámanos, seguro tenemos la solución para el problema de tu equipo.
                            </Card.Text>
                            <Button variant="primary">VER MÁS</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="img/lava3.jpg" alt="Servicio Técnico - SERVICIO PROFESIONAL DE MANTENIMIENTO Y REPARACIÓN ESPECIALIZADO SAMSUNG" title="Servicio Técnico - SERVICIO PROFESIONAL DE MANTENIMIENTO Y REPARACIÓN ESPECIALIZADO SAMSUNG" />
                        <Card.Body>
                            <Card.Title>Refacciones Originales</Card.Title>
                            <hr/>
                            <Card.Text>
                            En todas las reparaciones, utilizamos unicamente refacciones adecuadas para garantizar el correcto funcionamiento de su equipo.
                            </Card.Text>
                            <Button variant="primary">VER MÁS</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
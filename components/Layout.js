import Head from 'next/head';
import Nav from './Nav';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const siteTitle = 'Servicio Técnico - SERVICIO PROFESIONAL DE MANTENIMIENTO Y REPARACIÓN ESPECIALIZADO SAMSUNG'

export default function Layout({ children, home }) {
    return (
        <Container fluid={true}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" type="image/png" href="/img/logo.png" />
                <meta name="description" content="Learn how to build a personal website using Next.js" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Row>
                <Col style={{ margin: 0, padding: 0}}>
                    <Nav />
                </Col>
            </Row>
            <Row>
                {children}
            </Row>
        </Container>
    )
}
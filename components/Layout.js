import Head from 'next/head';
import Nav from './Nav';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <Container fluid={true}>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Learn how to build a personal website using Next.js" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Row>
                <Col className="m-0 p-0">
                    <Nav />
                </Col>
            </Row>
            <Row>
                <Col className="p-0">
                    {children}
                </Col>
            </Row>
        </Container>
    )
}
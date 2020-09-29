import Layout from '../components/Layout'
import Banner from '../components/Banner'
import BannerDos from '../components/BannerDos'
import Jumbotronbanner from '../components/Jumbotronbanner'
import Footer from '../components/Footer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
  return (
    <Layout>
      <Row style={{margin: 0, padding: 0}}>
        <Col style={{margin: 0, padding: 0}}>
          <Carousel fluid>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/slider1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Servicio Técnico</h3>
                <p>Servicio profesional de mantenimiento y reparación especializado</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/slider2.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Servicio Técnico</h3>
                <p>Servicio profesional de mantenimiento y reparación especializado</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="img/slider3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Servicio Técnico</h3>
                <p>Servicio profesional de mantenimiento y reparación especializado</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Banner backColor="#034fa0" />
      <BannerDos />
      <Jumbotronbanner />
      <Footer backColor="#111111" />
    </Layout>
  )
}

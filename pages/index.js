import Layout from '../components/Layout'
import Banner from '../components/Banner'
import BannerDos from '../components/BannerDos'
import Jumbotronbanner from '../components/Jumbotronbanner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
  return (
    <Layout>
      <Row>
        <Col className="m-0 p-0">
          <Carousel>
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
      <Banner />
      <BannerDos />
      <Jumbotronbanner />
    </Layout>
  )
}

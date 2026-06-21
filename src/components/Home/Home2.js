import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatarBuenVecino.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEJANOS  <span className="purple"> PRESENTARNOS </span> MEJOR
            </h1>
            <p className="home-about-body">
              Somos una plataforma de apoyo a personas en situacion de calle que no tienen las posibilidades de adquirir alimentos.
              <br />
              <br />
              Actualmente estamos disponibles en
              <i>
                <b className="purple">
                  {" "}
                  La Piedad, Michoacan{" "}
                </b>
              </i>
              .
              <br />
              <br />
              Trabajamos por un futuro 
              <i>
                <b className="purple">
                  {" "}
                  SIN HAMBRE{" "}
                </b>
              </i>
              <br />
        
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid rounded" alt="avatar"/>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

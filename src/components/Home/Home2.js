import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEJAME  <span className="purple"> PRESENTARME </span> MEJOR
            </h1>
            <p className="home-about-body">
              Soy un ingeniero en progreso osiosi
              <br />
              <br />
              Tengo conocimiento en lenguajes como:
              <i>
                <b className="purple">
                  {" "}
                  Java, C++, y Python{" "}
                </b>
              </i>
              — y adoro trabajar de Backend
              <br />
              <br />
              Las areas en las que me quiero desarrollar son 
              <i>
                <b className="purple">
                  {" "}
                  Inteligencia Artificial{" "}
                </b>
              </i>
              <br />
        
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

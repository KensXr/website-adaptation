import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/bancoAlim.jpg";
import chatify from "../../Assets/Projects/señor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/actualizacion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Noticias <strong className="purple">recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Algunas de las noticias más recientes de nuestra comunidad.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Reconocimiento a don Ernesto"
              description="Tras un par de meses ayudando a los necesitados, don Ernesto, dueño del restaurante 'El Rinconcito', ha logrado llegar al magnifico numero de 200 comidas preparadas regaladas a la comunidad. Queremos agradecerle por apoyar tanto a la plataforma como a los necesitados, celebremos y esperemos que nuestra colaboracion continue durante mucho tiempo!"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="¡Actualizacion!"
              description={<>Gracias al feedback de distintos usuarios hemos logrado identificar y resolver errores que afectaban la experiencia del usuario.<br /><br />- Hemos arreglado el error que mostraba imagenes incorrectas en el momento del checkout.<br /><br />- Se ha arreglado el error que provocaba que la pagina se congelara al hacer acciones bruscas.<br /><br />- Se ha mejorado la interfaz del comerciante con el fin de hacerla más intuitiva.</>}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description={<>Estamos emocionados de anunciar nuestra reciente colaboración con el Banco de Alimentos municipal.<br /><br />Esta alianza nos permitirá multiplicar nuestra capacidad de almacenamiento y llegar a 3 nuevas zonas de la ciudad que antes no podíamos cubrir.</>}             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos! Somos una<span className="purple"> iniciativa comunitaria</span>{" "}
            de <span className="purple">La Piedad Michoacan, Mexico</span>.
            <br />
            Nuestro objetivo es transformar los barrios en {" "}
            <span className="purple">comunidades activas</span>{" "} donde el intercambio de favores y el conocimiento local sea la norma, no la excepción.

            <br />
            Buscamos reducir la hambre urbana mediante herramientas tecnológicas que fomenten la seguridad participativa, el comercio de cercano y el voluntariado. 
            Queremos que cada habitante se convierta en un pilar fundamental de su entorno social.
          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Tu colaboracion es nuestra fuerza: Juntos construimos una mundo más próspero y sin hambre"{" "}
          </p>
          <footer className="blockquote-footer">El Buen Vecino</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

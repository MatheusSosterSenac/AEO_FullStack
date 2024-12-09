import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/footer.css";

export default function Footer() {

  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps/place/R.+Pero+Vaz+de+Caminha,+285+-+Costa+e+Silva,+Joinville+-+SC,+89218-520/@-26.2808302,-48.8705479,17z/data=!3m1!4b1!4m6!3m5!1s0x94deafe504dd2b5b:0x50f8a7c2fd97828f!8m2!3d-26.280835!4d-48.867973!16s%2Fg%2F11f3nhl76j?entry=ttu", "_blank");
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          
          <Col style={{textAlign: "center"}} lg={12} sm={12}>
            Todos os direitos reservados.
          </Col>
   
        </Row>
      </Container>
    </footer>
  );
}

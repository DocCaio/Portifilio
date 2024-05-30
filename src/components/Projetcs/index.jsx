import React from "react";
import './styles.css';
import { Col, Container, Nav, Row } from "react-bootstrap";


export const Projets = () => {  
    
    return (
    
  <section className="project" id="projetc">
    <Container>
        <Row>
            <Col>
                <h2>Projetct</h2>
                <p>Description</p>
                
                <Nav variant="pills"  defaultActiveKey="/home">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link  eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
            </Col>
        </Row>
    </Container>
   
  </section>
     )
 }
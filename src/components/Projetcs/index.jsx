import React from "react";
import './styles.css';
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Pro from '../../util/pro.js';

export const Projets = () => {  
<Pro/>
  
    return (
    
  <section className="project" id="projetc">
    <Container>
        <Row>
            <Col>
                <h2>Projetct</h2>
                <p>Description</p>
                <Tab.Container id="projetcts-tabs" defaultActiveKey="fist">
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
                  <Tab.Content>
                    <Tab.Pane eventKey="fisrt">
                      <Row>
                      {
                          Pro.map((Pro , index) => {
                            return (
                              <p>{Pro.title}</p>
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
            </Col>
        </Row>
    </Container>
   
  </section>
     )
 }
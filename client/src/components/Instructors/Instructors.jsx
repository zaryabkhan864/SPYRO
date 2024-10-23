import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import cc1 from '../../Images/Instruc1.png';
import cc2 from '../../Images/Instruc2.png';
import cc3 from '../../Images/Instruc3.png';
import cc4 from '../../Images/Instruc4.png';
const Instructors = () => {
    return (
        <Container fluid className="Second-background py-5">
            <Row className="d-flex justify-content-center text-center">
                <Col xl={12}>
                    <h1 className="text-white py-5">Instructor</h1>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} className="bg-transparent">
                        <Card.Img variant="top" src={cc1} />
                        <Card.Body>
                            <Card.Title>Jocob Jones</Card.Title>
                            <Card.Text>
                                Gym trainer
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} className="bg-transparent">
                        <Card.Img variant="top" src={cc2} />
                        <Card.Body>
                            <Card.Title>Jocob Jones</Card.Title>
                            <Card.Text>
                                Gym trainer
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} className="bg-transparent">
                        <Card.Img variant="top" src={cc3} />
                        <Card.Body>
                            <Card.Title>Jocob Jones</Card.Title>
                            <Card.Text>
                                Gym trainer
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} className="bg-transparent">
                        <Card.Img variant="top" src={cc4} />
                        <Card.Body>
                            <Card.Title>Jocob Jones</Card.Title>
                            <Card.Text>
                                Gym trainer
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Instructors
import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cc1 from '../../Images/cc3.png';
import cc2 from '../../Images/cc2.png';
import cc3 from '../../Images/cc1.png';
import OneSideCurveButton from '../Buttons/OneSideCurveButton';


const Classess = () => {
    return (
        <Container id="classess" className="classessBG" fluid>
            <Row className="d-flex justify-content-center">
                <Col xl={12} lg={12} className="text-center ">
                    <h1 className="text-white">Classes</h1>
                </Col>
                <Col >
                    <Card style={{ width: '18rem' }} className="bg-transparent">
                        <Card.Img variant="top" src={cc1} />
                        <Card.Body className="ps-0">
                            <Card.Title className="d-flex justify-content-between">
                                <span>Yoga</span>
                                <span>29 Students</span>
                            </Card.Title>
                            <Card.Text className="d-flex justify-content-between">
                                <span>Strength & Sweat</span>
                                <span>2H</span>
                            </Card.Text>
                            <Card.Text>
                                <p><span>Instructor:</span><span>Esther Howard</span></p>
                                <ul >
                                    <li className="ps-0"><span>No. of Classes:</span><span>30</span></li>
                                    <li className="ps-0"><span>Difficulty:</span><span>Beginner</span></li>
                                </ul>
                            </Card.Text>
                            <Card.Footer className="d-flex  text-muted px-0 justify-content-between">
                                <OneSideCurveButton />
                                <Button className="classes-skewB orange-color">Start a free trail</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} className="bg-transparent">
                        <Card.Img variant="top" src={cc2} />
                        <Card.Body className="ps-0">
                            <Card.Title className="d-flex justify-content-between">
                                <span>Yoga</span>
                                <span>29 Students</span>
                            </Card.Title>
                            <Card.Text className="d-flex justify-content-between">
                                <span>Strength & Sweat</span>
                                <span>2H</span>
                            </Card.Text>
                            <Card.Text>
                                <p><span>Instructor:</span><span>Esther Howard</span></p>
                                <ul >
                                    <li className="ps-0"><span>No. of Classes:</span><span>30</span></li>
                                    <li className="ps-0"><span>Difficulty:</span><span>Beginner</span></li>
                                </ul>
                            </Card.Text>
                            <Card.Footer className="text-muted px-0">
                                <OneSideCurveButton />
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} className="bg-transparent">
                        <Card.Img variant="top" src={cc3} />
                        <Card.Body className="ps-0">
                            <Card.Title className="d-flex justify-content-between">
                                <span>Yoga</span>
                                <span>29 Students</span>
                            </Card.Title>
                            <Card.Text className="d-flex justify-content-between">
                                <span>Strength & Sweat</span>
                                <span>2H</span>
                            </Card.Text>
                            <Card.Text>
                                <p><span>Instructor:</span><span>Esther Howard</span></p>
                                <ul >
                                    <li className="ps-0"><span>No. of Classes:</span><span>30</span></li>
                                    <li className="ps-0"><span>Difficulty:</span><span>Beginner</span></li>
                                </ul>
                            </Card.Text>
                            <Card.Footer className="text-muted px-0">
                                <OneSideCurveButton />
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Classess
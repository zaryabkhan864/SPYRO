import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CF1 from "../../Images/CF1.png";
const Feedback = () => {
    return (
        <Container fluid id="feedback">
        <Row>
            <Col><h1>Client Feedback</h1></Col>
        </Row>
            <Row>
                <Col xl={4} lg={4} md={4} sm={6} xs={6}>
                    <div class="card bg-dark text-white">
                        <div class="card-header">Al-Balad is essentially Jeddah old town. It was once surrounded by a wall, but now only the gates re</div>
                        <div class="card-body">
                            {/* <!-- Rating stars using Font Awesome icons --> */}
                            <div class="mb-3">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            {/* <!-- Small profile picture and username side by side --> */}
                            <div class="d-flex align-items-center">
                                <img src={CF1} alt="Profile Picture" class="rounded-circle" width="50" />
                                <p class="ml-3 mb-0 ms-3">Courtney Henry</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Feedback
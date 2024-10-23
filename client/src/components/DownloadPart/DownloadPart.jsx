import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DownloadImg from "../../Images/downloadImg.png"
import Card from 'react-bootstrap/Card';
const DownloadPart = () => {
    return (
        <Container fluid className="download-bg ">
            <Row className="d-flex">
                <Col xl={7} className="download-text-area text-white ps-5">
                    <h1>Download the most loved</h1>
                    <h2>fitness app</h2>
                    <h5>Start your fitness journey with us. Join the cult!</h5>
                    <Button className="me-5">Google Play</Button>
                    <Button>App Store</Button>
                </Col>
                <Col xl={5}>
                    <Card.Img variant="top" src={DownloadImg} />
                </Col>
            </Row>
        </Container>
    )
}

export default DownloadPart
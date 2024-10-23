import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import ReactPlayer from 'react-player'
// import ReactPlayer from 'react-player/youtube'
import ReactPlayer from 'react-player/lazy'
const VideoPart = () => {
    return (
        <Container>
            <Row className="">
                <Col >
                    <ReactPlayer
                        className='mx-auto'
                        url='https://youtu.be/4-zjQvTDnbw?si=tBFGf1HW4b5mcdS6' />

                </Col>
            </Row>
        </Container>
    )
}

export default VideoPart
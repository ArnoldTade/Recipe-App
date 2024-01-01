import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Header = (props) => {
    return (
        <Row>
            <Col sm={8} id="title">
                <h1>{props.heading}</h1>
            </Col>
        </Row>
    )
}

export default Header;
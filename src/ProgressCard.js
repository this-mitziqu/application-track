import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Card } from 'react-bootstrap';
import './ProgressCard.css';

class ProgressCard extends React.Component {
    render() {
    return(
        <Container className="px-1 px-md-4 mx-auto">
            <Card>
                <Row className="d-flex justify-content-between px-3 top">
                    <div className="d-flex">
                        <h5>ORDER <span className="text-primary font-weight-bold">#Y34XDHR</span></h5>
                    </div>
                    <div className="d-flex flex-column text-sm-right">
                        <p className="mb-0">Expected Arrival <span>01/12/19</span></p>
                        <p>USPS <span className="font-weight-bold">234094567242423422898</span></p>
                    </div>
                </Row>
                <div className="d-flex justify-content-center">
                    <div className="col-12">
                        <ul id="progressbar" className="text-center">
                            <li className="active step0"></li>
                            <li className="active step0"></li>
                            <li className="active step0"></li>
                            <li className="step0"></li>
                        </ul>
                    </div>
                </div>
                <Row className="justify-content-between top">
                    <Row className="d-flex icon-content">
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">Order{"\n"}Processed</p>
                        </div>
                    </Row>
                    <Row className="d-flex icon-content"> 
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">Order{"\n"}Shipped</p>
                        </div>
                    </Row>
                    <Row className="d-flex icon-content">
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">Order{"\n"}En Route</p>
                        </div>
                    </Row>
                    <Row className="d-flex icon-content">
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">Order{"\n"}Arrived</p>
                        </div>
                    </Row>
                </Row>
            </Card>
        </Container>
    );
    }
}

export default ProgressCard;


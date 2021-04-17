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
                        <h5>ID <span className="text-primary font-weight-bold">#{this.props.result.id}</span></h5>
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
                            <p className="font-weight-bold">申请已提交</p>
                        </div>
                    </Row>
                    <Row className="d-flex icon-content"> 
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">已通过笔试审核</p>
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


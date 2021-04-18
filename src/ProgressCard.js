import React from 'react'
import { Container, Row, Card } from 'react-bootstrap';
import './ProgressCard.css';
import ProgressBar from './ProgressBar';

class ProgressCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }       
    };


    
    render() {
     const{progress} = this.state;
    return(
        <Container className="px-1 px-md-4 mx-auto">
            <Card>
                <Row className="d-flex justify-content-between px-3 pt-4 pb-5 top">
                    <div className="d-flex flex-column font-weight-bold">
                        <p className="mb-0">所属申请：<span>2021唯理工作坊</span></p>
                        <p className="mb-0">姓名：<span>ABC</span></p>
                        <p className="mb-0">学校：<span>ADSFGHJ</span></p>
                    </div>
                    <div className="d-flex">
                        <h5>ID: <span className="text-primary font-weight-bold">#{this.props.result.id}</span></h5>
                    </div>
                </Row>

                <ProgressBar result={this.props.result} />

                {/* <Row className="justify-content-between top">
                    <Row className="d-flex icon-content">
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">递交申请</p>
                        </div>
                    </Row>
                    <Row className="d-flex icon-content"> 
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">审核中</p>
                        </div>
                    </Row>
                    <Row className="d-flex icon-content">
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">面试中</p>
                        </div>
                    </Row>
                    <Row className="d-flex icon-content">
                        <div className="d-flex flex-column">
                            <p className="font-weight-bold">已录取</p>
                        </div>
                    </Row>
                </Row> */}
            </Card>
        </Container>
    );
    }
}

export default ProgressCard;


import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Card } from 'react-bootstrap';
import './ProgressCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons/'

class ProgressCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: []
        }       
    };

    updateBar() {
        var myProgress = [];
        const bound = this.props.result.status;
        for (var i = 0; i < bound; i++){
            myProgress[i] = 'active';
        }
        this.setState({progress: myProgress});
    }

    componentDidMount() {
        this.updateBar();
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.result !== prevProps.result) {
            this.updateBar();
        }
    }
    
    render() {
     const{progress} = this.state;
    return(
        <Container className="px-1 px-md-4 mx-auto">
            <Card>
                <Row className="d-flex justify-content-between px-3 pt-4 pb-5 top">
                    <div className="d-flex">
                        <h5>ID<span className="text-primary font-weight-bold">#{this.props.result.id}</span></h5>
                    </div>
                    <div className="d-flex flex-column text-sm-right">
                        <p className="mb-0">Expected Arrival <span>01/12/19</span></p>
                    </div>
                </Row>
                <div className="d-flex justify-content-center">
                    <div className="col-12">
                        <ul id="progressbar" className="text-center">
                            <li className={progress[0] + " step0"}></li>
                            <li className={progress[1] + " step0"}></li>
                            <li className={progress[2] + " step0"}></li>
                            <li className={progress[3] + " step0"}></li>
                        </ul>
                    </div>
                </div>
                <Row className="justify-content-between top">
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
                </Row>
            </Card>
        </Container>
    );
    }
}

export default ProgressCard;


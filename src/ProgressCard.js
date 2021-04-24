import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap';
import './ProgressCard.css';
import ProgressBar from './ProgressBar';

class ProgressCard extends React.Component {
    
    render() {
        const { result, index } = this.props;
        const trackInfo = JSON.parse(result.trackInfo);
    return(
        <Container className="px-1 px-md-4 mx-auto">
            <Card>
                <Row className="d-flex justify-content-between px-3 pt-4 pb-5 top">
                    <div className="d-flex flex-column font-weight-bold">
                        <p className="mb-0">所属申请：<span>{result.appName+' - '+trackInfo[index].branchName}</span></p>
                        <p className="mb-0">姓名：<span>{}</span></p>
                        <p className="mb-0">学校：<span>{}</span></p>
                    </div>
                    <div className="d-flex">
                        <h5>ID: <span className="text-primary font-weight-bold">#{result.id}</span></h5>
                    </div>
                </Row>

                <ProgressBar info = {trackInfo[index]} />

            </Card>
            <Button variant="primary" onClick={()=>this.props.onClick()}>返回</Button>
        </Container>
    );
    }
}

export default ProgressCard;


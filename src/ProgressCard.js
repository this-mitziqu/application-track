import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap';
import './ProgressCard.css';
import ProgressBar from './ProgressBar';

class ProgressCard extends React.Component {
    dispatchCard() {
        console.log(this.props.app)
        return JSON.parse(this.props.app.trackInfo).map((branch, i) => {
            return(
                <Card className="py-4 my-5">
                    <Row className="d-flex justify-content-between px-3 pt-4 pb-5 top">
                        <div className="d-flex flex-column font-weight-bold">
                            <p className="mb-0">所属申请：<span>{this.props.app.appName+' - '+branch.branchName}</span></p>
                            <p className="mb-0">姓名：<span>{}</span></p>
                            <p className="mb-0">学校：<span>{}</span></p>
                        </div>
                        <div className="d-flex">
                            <h5>ID: <span className="text-primary font-weight-bold">#{this.props.app.id}</span></h5>
                        </div>
                    </Row>
                    <ProgressBar info = {branch} />
                </Card>
            )
        })
    }
    
    render() {
        return(
            <Container className="px-1 my-5 px-md-4 mx-auto">
                {this.dispatchCard()}
                <Button variant="primary" onClick={()=>this.props.onClick()}>返回列表</Button>
            </Container>
        );
    }
}

export default ProgressCard;


import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap';
import './ProgressCard.css';
import ProgressBar from './ProgressBar';

class ProgressCard extends React.Component {
    dispatchCard() {
        // console.log(this.props.app)
        return JSON.parse(this.props.app.trackInfo).map((branch, i) => {
            return(
                <Card className="py-4 mt-0 mb-5" key={i}>
                    <Row className="d-flex justify-content-between px-3 pt-4 pb-5 top">
                        <div className="d-flex flex-column font-weight-bold">
                            <p className="mb-0">所属申请：<span>{this.props.app.appName+' - '+branch.branchName}</span></p>
                            <p className="mb-0">姓名：<span>{this.props.app.name}</span></p>
                            <p className="mb-0">学校：<span>{this.props.app.school}</span></p>
                        </div>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-bold">ID: <span className="text-primary">#{this.props.app.id}</span></h5>
                        </div>
                    </Row>
                    <ProgressBar info = {branch} />
                    <div className="my-2">
                        <h6 className="font-weight-bold text-center">最近更新时间：<span className="text-primary">{branch.lastUpdateTime}</span></h6>
                    </div>
                </Card>
            )
        })
    }
    
    render() {
        return(
            <Container className="px-1 mb-5 px-md-4 mx-auto">
                {this.dispatchCard()}
                <div className="text-center">
                    <Button variant="primary" onClick={()=>this.props.onClick()}>返回列表</Button>
                </div>
            </Container>
        );
    }
}

export default ProgressCard;


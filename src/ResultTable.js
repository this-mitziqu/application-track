import React from 'react'
import { Container, Table, Button } from 'react-bootstrap';

class ResultTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }       
    };

    renderTable() {
        const result = this.props.result;
        return JSON.parse(result.trackInfo).map((branch, i) => {
            return(
                    <tr key={i}>
                    <td>{i+1}</td>
                    <td>{result.id}</td>
                    <td>{result.appName}</td>
                    <td>{branch.branchName}</td>
                    <td><Button variant="primary" onClick={()=>this.props.getCardIndex(i+1)}>点击查看</Button></td>
                    </tr>
            )
        })
    }

    
    render() {
    return(
        <Container className="px-1 px-md-4 mx-auto">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>序号</th>
                    <th>申请ID</th>
                    <th>申请/报名类别</th>
                    <th>分支</th>
                    <th>申请状态</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTable()}
                </tbody>
            </Table>
        </Container>
    );
    }
}

export default ResultTable;
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Form, InputGroup, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.reset();
    this.setState({loading: true});
    axios.post('https://apply.veritaschina.org/api/app-track.php', {
      query: this.state.value
    }
      ).then((response) => {
        this.setState({loading: false});
        if (typeof(response.data) == "string" || response.data.length === 0) {
          alert("你查询的ID不存在");
        } else {
          this.props.handleResult(response);
        }
      }
      ).catch(function (error) {
        if (error.response) {
          console.log(error.response.headers);
        } 
        else if (error.request) {
            console.log(error.request);
        } 
        else {
          console.log(error.message);
        }
      console.log(error.config);
    });
    event.preventDefault();
  }

  render() {
    return (
      <Container className="py-5">
    <Form onSubmit={this.handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>#</InputGroup.Text>
        </InputGroup.Prepend>
          <Form.Control
            placeholder="请输入个人ID或申请/报名ID"
            aria-label="请输入个人ID或申请/报名ID"
            aria-describedby="basic-addon2"
            type="text" 
            value={this.state.value || ''} 
            onChange={this.handleChange}
          />
        <InputGroup.Append>
          <Button variant="primary" type="submit" value="Submit">查询进度</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  <div>
    {
      this.state.loading?(<div>查询中...</div>):null
    }
  </div>
  </Container>
    );
  }
}

ReactDOM.render(
  <InputForm />,
  document.getElementById('root')
);

export default InputForm;
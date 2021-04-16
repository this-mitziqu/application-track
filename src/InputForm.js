import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Form, InputGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

var id = 437133

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 437133};
    this.state = {posts: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  
    axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + this.state.value, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
      },
      }).then((response) => this.setState({posts: response.data.title})
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
    const { posts } = this.state
    return (
      <div>
    <Form onSubmit={this.handleSubmit}>
    <InputGroup className="mb-3">
    <Form.Control
      placeholder="请输入ID"
      aria-label="请输入ID"
      aria-describedby="basic-addon2"
      type="text" 
      value={this.state.value || ''} 
      onChange={this.handleChange}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" type="submit" value="Submit">提交</Button>
    </InputGroup.Append>
    </InputGroup>
  </Form>
  <div>{posts}</div>
  </div>
    );
  }
}

ReactDOM.render(
  <InputForm />,
  document.getElementById('root')
);

export default InputForm;
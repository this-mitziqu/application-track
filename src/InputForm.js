import React from 'react'
import ReactDOM from 'react-dom'
import { Form, InputGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('输入的ID为: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    <Form onSubmit={this.handleSubmit}>
    <InputGroup className="mb-3">
    <Form.Control
      placeholder="请输入ID"
      aria-label="请输入ID"
      aria-describedby="basic-addon2"
      type="text" 
      value={this.state.value} 
      onChange={this.handleChange}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" type="submit" value="Submit">提交</Button>
    </InputGroup.Append>
    </InputGroup>
  </Form>
    );
  }
}

ReactDOM.render(
  <InputForm />,
  document.getElementById('root')
);

export default InputForm;
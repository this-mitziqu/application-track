import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Form, InputGroup, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ProgressCard from './ProgressCard';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      result: {},
      showCard: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios.post('https://apply.veritaschina.org/api/track.php', {
      query: this.state.value
    }
      ).then((response) => {
        this.setState({result: response.data[0]});
        console.log(typeof(this.state.result));
        if (typeof(this.state.result) == "string") {
          alert("你查询的ID不存在");
        } else {
          this.setState({showCard: true});
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
    const { result, showCard } = this.state;
    return (
      <Container>
    <Form onSubmit={this.handleSubmit}>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>#</InputGroup.Text>
    </InputGroup.Prepend>
    <Form.Control
      placeholder="请输入申请ID"
      aria-label="请输入申请ID"
      aria-describedby="basic-addon2"
      type="text" 
      value={this.state.value || ''} 
      onChange={this.handleChange}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" type="submit" value="Submit">查询进度</Button>
    </InputGroup.Append>
    </InputGroup>
  </Form>
  {/* <div>Your application status: {result.status}</div>  */}
  <div>
    {
    showCard?(<ProgressCard result={result} />):null
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
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Form, InputGroup, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


/*
现在的api接口是大都会博物馆提供的免费api， 用来test api调用是否正常。
输入的是艺术作品的id， 会返回他们的title。 
详见 https://metmuseum.github.io/。
Example: 
输入 43713 => 返回 Garden at Sainte-Adresse
输入 45734 => 返回 Quail and Millet
输入 43711 => 返回 Bead 
输入 43222 => 返回 Sceptre

之后可以换成我们自己的api。 艺术品id = 学生的Id， title = application status。 

*/

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {posts: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  
    axios.post('https://apply.veritaschina.org/api/track.php', {
      query: this.state.value
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
      }
    }
      ).then((response) => this.setState({posts: response.data.title})
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
      <Container>
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
  </Container>
    );
  }
}

ReactDOM.render(
  <InputForm />,
  document.getElementById('root')
);

export default InputForm;
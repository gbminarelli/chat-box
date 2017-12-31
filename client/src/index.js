import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Form, FormGroup, FormControl, Col, Button, InputGroup, Jumbotron } from 'react-bootstrap';


class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastMessages: [],
    };
    this.socket = io('http://localhost:8080');
  }

  componentDidMount() {
    this.socket.on('message', (data) => {
      const message = {
        id: this.state.pastMessages.length + 1,
        message: data.message
      };
      this.setState({pastMessages: this.state.pastMessages.concat([message])});
    });
  }

  render() {
    return(
      <Col xs = {12}>
        <Form
          horizontal
          onSubmit = {(event) => {
            event.preventDefault();
            const message = document.getElementById('message').value;
            this.socket.emit('message', {message : message});
            document.getElementById('message').value = '';
          }}
        >
          <Display pastMessages = {this.state.pastMessages.map((obj) => obj.message)}/>
          <Input />
        </Form>
      </Col>
    );
  }
}

class Display extends React.Component {

  render() {
    return(
      <FormGroup>
        <Col xs = {12}>
          <Jumbotron id = 'display'>
            <ul>
              {this.props.pastMessages.map((message) => <li>{message}</li>)}
            </ul>
          </Jumbotron>
        </Col>
      </FormGroup>
    );
  }
}

class Input extends React.Component {
  render() {
    return(
      <FormGroup>
        <Col xs = {12} id = 'input'>
          <InputGroup>
              <FormControl
                type = 'text'
                placeholder = 'Enter message...'
                id = 'message'
              />
              <InputGroup.Button>
                <Button type = 'submit'>
                  Send
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </Col>
      </FormGroup>
    );
  }
}

ReactDOM.render(
  <Root />, document.getElementById('root')
);

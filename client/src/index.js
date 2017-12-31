import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Form, FormGroup, FormControl, Col, Button, InputGroup, Jumbotron } from 'react-bootstrap';

const socket = io('http://localhost:8080'); //TODO change to the external ip address

class Root extends React.Component {
  render() {
    return(
      <Form horizontal>
        <Display />
        <Input />
      </Form>
    );
  }
}

class Display extends React.Component {
  render() {
    return(
      <FormGroup>
        <Col xs = {12}>
          <Jumbotron id = 'display'>
          </Jumbotron>
        </Col>
      </FormGroup>
    );
  }
}

class Input extends React.Component {
  render() {
    return(
      <FormGroup controlId="formTextInput">
        <Col xs = {12}>
          <InputGroup>
              <FormControl
                type = 'text'
                placeholder = 'Enter message...'
              />
              <InputGroup.Button>
                <Button>
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

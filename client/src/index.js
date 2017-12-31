import io from 'socket.io-client';
import RootComponent from './client.js';
import React from 'react';
import ReactDOM from 'react-dom';

const socket = io('http://localhost:8080'); //TODO change to the external ip address

ReactDOM.render(
  <RootComponent />, document.getElementById('root')
);

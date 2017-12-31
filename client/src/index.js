const io = require('socket.io-client');
const socket = io('http://localhost:8080'); //TODO change to the external ip address
socket.on('message', (data) => {
  alert(data.message);
});

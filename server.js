const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Client connected...');
  socket.on('message', (data) => {
    console.log(data.message);
    io.emit('message', data);
  });
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/client/public/index.html`);
});

server.listen(8080);

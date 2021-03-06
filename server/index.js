const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');
const voteService = require('./vote.service');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

io.on('connection', (socket) => {
  socket.on('vote', (data) => {
    console.log(`Vote to ${data}`);
    const votes = voteService.vote(data);
    socket.broadcast.emit('votes', votes);
  });
});

nextApp.prepare().then(() => {

  app.get('/votes', (req, res) => {
    res.json(voteService.votes);
  });

  app.get('*', (req, res) => nextHandler(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

});

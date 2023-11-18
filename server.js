const express = require("express");
const next = require("next");
const cors = require('cors');
const http = require('http');
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== "production";

const app = next({
  dev
});
const handle = app.getRequestHandler();

const socketIO = require('socket.io');

app.prepare().then(() => {
  //const csrf = require("csurf");
  const cookieSession = require("cookie-session");

  const server = express();
  const server2 = express();
  var corsOptions = { origin: '*', credentials: true, methods: 'GET,PUT,POST,OPTIONS', allowedHeaders: 'Content-Type,Authorization' }

  server.use(cors(corsOptions));
  server2.use(cors(corsOptions));
  const httpServer = http.createServer(server);
  const io = socketIO(httpServer);
  // Handle socket connections
  io.on('connection', (socket) => {
    console.log('User connected');

    // Handle chat messages
    socket.on('chat message', (msg) => {
      console.log('chat message', msg);
      io.emit('chat message', msg);
    });

    // Handle disconnections
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  // const port2 = 3002
  // serverSocket.listen(port2, '0.0.0.0', (err) => {
  //   console.log(`> Socket Ready on http://localhost:${port2}`);
  // });


  server.disable("x-powered-by");
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use(
    cookieSession({
      name: "chat.sid",
      keys: [process.env.APP_KEY],
      maxAge: 24 * 60 * 60 * 1000,
    })
  );

  const rateLimit = require("express-rate-limit");
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 250,
  });
  server.use('/api', limiter)



  const router = require("./server/route");
  server.use("/api", router);
  require('./server/database/db').init(server);



  server.all("*", (req, res) => {
    return handle(req, res);
  });

  httpServer.listen(port, '0.0.0.0', (err) => {
    console.log(`> Ready on http://localhost:${port}`);
  });


});

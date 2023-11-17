const express = require("express");
const next = require("next");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== "production";

const app = next({
  dev
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  //const csrf = require("csurf");
  const cookieSession = require("cookie-session");

  const server = express();
  server.disable("x-powered-by");
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use(
    cookieSession({
      name: "gcc.stw.sid",
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

  // const router = require("./server/route");
  // server.use("/api", router);

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, '0.0.0.0', (err) => {
    console.log(`> Ready on http://localhost:${port}`);
  });

});

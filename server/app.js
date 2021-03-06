require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const JWT = require("jsonwebtoken");
const articleRoutes = require("./src/articles/articles.routes");

const { UserModel } = require("./model/user");

mongoose.Promise = global.Promise;

require("./middleware/auth");

const routes = require("./routes/routes");
const secureRoute = require("./routes/secure-routes");

const app = express();
app.use(cookieParser());
app.use(cors());

app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: false }));

app.use("/", routes);

// Plug in the JWT strategy as a middleware so only verified users can access this route.
app.use("/", passport.authenticate("jwt", { session: false }), secureRoute);
app.use(
  "/",
  passport.authenticate("jwt", { session: false }),
  // (req, res, next) => {
  //   const articleId = req.query.articleId;
  //   res.locals.articleId = articleId;
  //   next();
  // },
  articleRoutes
);
// Handle errors.
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;

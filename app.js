const express = require("express");
const app = express();
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
require("./models/User");
require("./services/passport");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

app.use(
  cookieSession({
    maxAge: 10 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + "/client/build"));

app.get("/", (req, res) => {
  res.render(index.html);
});

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started");
});

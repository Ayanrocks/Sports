const User = require("../models/User");

module.exports = app => {
  app.get("/profile/data", (req, res) => {
    res.send(req.user);
  });

  app.get("/profile/delete/:id", (req, res) => {
    req.logout();
    User.findOneAndRemove(req.params.id, err => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).redirect("/");
      }
    });
  });
};

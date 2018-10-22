const passport = require("passport");

module.exports = app => {
  app.get("/auth", (req, res) => {});

  //Google OAuth2
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      console.log("callback success");
      res.redirect("/dashboard");
    }
  );

  //Facebook OAuth2
  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: "email" })
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    (req, res) => {
      console.log("FAcebook Sucess");
      res.redirect("/dashboard");
    }
  );
};

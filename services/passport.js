const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const facebookStrategy = require("passport-facebook");
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      console.log(profile.displayName);
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        googleId: profile.id,
        name: profile.displayName,
        gender: profile.gender,
        email: profile.emails[0].value,
        photo: profile.photos[0].value,
        provider: profile.provider
      }).save();
      done(null, user);
    }
  )
);

passport.use(
  new facebookStrategy(
    {
      clientID: keys.facebookAppID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback",
      enableProof: true,
      proxy: true,
      profileFields: ["id", "displayName", "gender", "email", "photos"]
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile.displayName);
      const existingUser = await User.findOne({ facebookId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        facebookId: profile.id,
        name: profile.displayName,
        gender: profile.gender,
        email: profile.emails[0].value,
        photo: profile.photos[0].value,
        provider: profile.provider
      }).save();
      done(null, user);
    }
  )
);

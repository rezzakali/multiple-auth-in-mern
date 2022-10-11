// external imports
import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:5000/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      //  if you want to save data
      //   const user = {
      //     id: profile.id,
      //     username: profile.displayName,
      //     avatar: profile.photos[0].value,
      //   };
      //   console.log(user);
    }
  )
);

// facebook

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:5000/auth/facebook/callback',
    },
    function (accessToken, refreshToken, profile, cb) {
      done(null, profile);
    }
  )
);

// github

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;

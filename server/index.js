// external imports
import cookieSession from 'cookie-session';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import passport from './utilities/passport.js';

// internal imports
import googleAuth from './routes/googleAuth.js';

// call the app object
const app = express();

// environment setup
dotenv.config();

// cors policy
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
// cookie session
app.use(
  cookieSession({ name: 'session', keys: ['ali'], maxAge: 24 * 60 * 60 * 100 })
);
// json parser
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/auth', googleAuth);

// error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next();
  } else {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});
// listening the server
app.listen(process.env.PORT, process.env.HOST_NAME, () => {
  console.log(
    `Your server is running successfully at http://${process.env.HOST_NAME}:${process.env.PORT}`
  );
});

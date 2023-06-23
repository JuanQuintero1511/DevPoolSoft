const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require("cors");
const path = require("path")




require('./db.js');

const server = express();

server.name = 'DevPool Soft';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(cors());
server.use(morgan('dev'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


//autenticacion

const session = require('express-session')
require('dotenv').config();

server.use(session({
  secret: 'misecreto que debe ir en variable de entorno',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENTID_PASSPORT,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET_PASSPORT,
    callbackURL: "http://localhost:3001/auth/google/callback",
    passReqToCallback: true
  },
    function (request, accessToken, refreshToken, profile, done) {
      // User_data.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return done(err, user);
      // });
      done(null, profile)
    }
  ));
passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((user, done) => {
  done(null, user)
})

//inicializamos passport
server.use(passport.initialize())

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;

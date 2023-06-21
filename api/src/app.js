const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require("cors");
require('dotenv').config();
//auth0
const { auth } = require('express-openid-connect');


const config = {
  authRequired: process.env.AUTHREQUIRED_AUTH0,
  auth0Logout: process.env.AUTH0LOGOUT_AUTH0,
  secret: process.env.SECRET_AUTH0,
  baseURL: process.env.BASEURL_AUTH0,
  clientID: process.env.CLIENTID_AUTH0,
  issuerBaseURL: process.env.ISSUERBASEURL_AUTH0,
};




require('./db.js');

const server = express();

server.name = 'DevPool Soft';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(cors());
server.use(morgan('dev'));
// auth router attaches /login, /logout, and /callback routes to the baseURL
server.use(auth(config));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;

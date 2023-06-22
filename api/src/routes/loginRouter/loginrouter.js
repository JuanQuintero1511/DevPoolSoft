const { Router } = require("express");

const loginRouter = Router();
// req.isAuthenticated is provided from the auth router
loginRouter.get('/', (req, res) => {
 res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
})

const { requiresAuth } = require('express-openid-connect');

loginRouter.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

module.exports = loginRouter;
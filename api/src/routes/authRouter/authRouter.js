const { Router } = require('express');
const path = require('path')
// const authGoogleHandler = require('../../handlers/authHandler/authGoogleHandler');
require('../../controllers/authController/authController')
const passport = require("passport")



const authRouter = Router();

function isLoggedIn(req, res ,next) {
 req.user ? next() : res.sendStatus(401)
}

authRouter.get('/',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

authRouter.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/protected',
        failureRedirect: '/auth/failure'
}));

authRouter.get('/protected', isLoggedIn, (req, res) =>{
res.send ('Inicio de sesión exitoso')
})

authRouter.get('/failure', (req, res) =>{
res.send ('Inicio de sesión fallido')
})

module.exports = authRouter;
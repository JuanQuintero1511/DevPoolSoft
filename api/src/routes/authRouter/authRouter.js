const passport = require("passport")
const { Router } = require('express');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const authRouter = Router();


//autenticacion
function isLoggedIn(req, res, next) {
 if (req.user) {
   next();
 } else {
   res.redirect('/auth/google');
 }
}


authRouter.get('/',
  passport.authenticate('google', { 
   scope: [ 'email', 'profile' ] }
));

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

authRouter.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/protected',
        failureRedirect: '/auth/google/failure'
}));

authRouter.get('/google/protected', isLoggedIn, (req, res) =>{
 let name = req.user.displayName
res.send (`Hola ${name}`)
})

authRouter.get('/google/failure', isLoggedIn, (req, res) =>{
res.send ("Inicio de sesion fallido", error)
})


authRouter.use('/google/logout', (req, res) =>{
 req.session.destroy();
 res.send ('Nos vemos pronto')
})

module.exports = authRouter;
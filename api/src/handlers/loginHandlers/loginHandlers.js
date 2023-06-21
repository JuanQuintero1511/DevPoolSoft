// req.isAuthenticated is provided from the auth router
const loginHandlers = (req, res) => {
 try {
  const app = app.get('/', (req, res) => {
   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  })}
  catch (error) {
  res.status(404).json({ error: error.message })
 }
}
module.exports = loginHandlers
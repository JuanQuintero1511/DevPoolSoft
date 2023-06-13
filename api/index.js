const server = require('../api/src/app.js');
// const { database } = require ('./src/db.js');


// database.sync({ force: true }).then(() => {
  console.log('Database connected');
  server.listen(3001, () => {
    console.log('% listening at http://localhost:3001'); 
  });
// })
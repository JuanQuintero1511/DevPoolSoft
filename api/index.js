const server = require('../api/src/app.js');

const { conn } = require('./src/db.js');


conn.sync({ force: false }).then(() => {
  console.log('Database connected');
  server.listen(3001, () => {
    console.log("PUTO EL QUE LEE"); 
  });
})

// '% listening at http://localhost:3001'
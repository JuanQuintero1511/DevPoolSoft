const server = require('../api/src/app.js');

const { conn } = require('./src/db.js');


conn.sync({ force: false }).then(() => {
  console.log('Database connected');
  server.listen(3001, () => {
    console.log("% listening at http://localhost:3001"); 
  });
})

// '% listening at http://localhost:3001'
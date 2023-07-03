const server = require('./src/app');

const { conn } = require('./src/db.js');

// conn.sync({ alter: true }).then(() => {
conn.sync({ force: false}).then(() => {
  console.log('Database connected');
  server.listen(3001, () => {
    console.log("% listening at http://localhost:3001"); 
  });
})

// conn.sync({ force: false }).then(() => {
//conn.sync({ alter: true }).then(() => {
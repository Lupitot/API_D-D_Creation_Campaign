// server.js
const http = require('http');
const path = require('path');
const app = require('./app');
// const history = require('./middlewares/history');

const port = process.env.PORT || 3000; 

// app.use(history(path.resolve(__dirname, '../Mon_API_DandD/frontapi/dist')));

const server = http.createServer(app);

server.listen(port);

console.log('Server created');
console.log('Listen on port ' + port + '!');

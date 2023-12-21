const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const bodyParser = require('body-parser');

const app = express();
app.use(compression());


// Passby CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



app.use(bodyParser.json());
// ROUTES
console.log('test1');
const apiRoutes = require('./routes/api');
const DandDRoutes = require('./routes/DandD');
const userRoutes = require('./routes/user');
console.log('test2');


app.use('/api/', apiRoutes);
app.use('/api/DandD/', DandDRoutes);
app.use('/api/users/', userRoutes);
console.log('test3');

const DB_id = 'paulpiauger2';
const DB_pw = 'X0P0504Ww0FanJsL';
const DB = 'mongodb+srv://'+ DB_id +':' + DB_pw +'@cluster0.gygkrui.mongodb.net/';

mongoose.connect(DB).then(() => {
    console.log('Connected to MongoDB with Success !');
}).catch((err) => {
    console.log('MongoDB ERROR', err);
});




module.exports = app;
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

const cors = require('cors');

// ROUTER-ek
var termekRoutes = require('./routes/termekRoutes');

var app = express();

// Middleware-ek
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// CORS
var corsOptions = {
  credentials: true,
  origin: 'http://localhost:3001'
};
app.use(cors(corsOptions));

// Statikus mappa
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// ROUTES
app.use('/api/termekek', termekRoutes);

module.exports = app;

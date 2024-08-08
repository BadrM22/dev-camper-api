const express = require('express');
const morgan = require('morgan');
require('dotenv').config({ path: './config/.env' });
require('colors');
const APIV1 = require('./routes/apiV1');

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1', APIV1);

module.exports = app;

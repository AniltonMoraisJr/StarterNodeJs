const express = require('express');
const requireDir = require('require-dir');
const cors = require('cors');
const mongoose = require('mongoose');
//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
requireDir('./src/models');

// Routes
const routes = require('./src/routes');
app.use('/api', routes);

//Listen
app.listen('3001');
const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const authRoutes = require('./routes/auth.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('Hello, World!')
});

app.use('/auth', authRoutes);

module.exports = app;
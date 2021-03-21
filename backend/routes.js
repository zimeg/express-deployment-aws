const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

router.get('/', (req, res) => res.json({ msg: 'Hi from the API' }));

router.get('/name', (req, res) => res.json({ name: process.env.NAME }));

router.post('/square', controllers.square);

module.exports = router;

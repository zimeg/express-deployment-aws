const ApiBuilder = require('claudia-api-builder');
const express = require('express');

const app = express();
const api = new ApiBuilder();
const { DEV } = process.argv;

api.get('/hello', (req) => (
  `hello ${req.queryString.name ? req.queryString.name : 'world'}`
));

if (DEV) {
  // eslint-disable-next-line no-console
  console.log('running in dev mode');
  app.get('/', (req, res) => res.send('hi'));
  app.listen(3000);
}

module.exports = api;

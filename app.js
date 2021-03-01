const ApiBuilder = require('claudia-api-builder');

const api = new ApiBuilder();

api.get('/hello', (req) => (
  `hello ${req.queryString.name ? req.queryString.name : 'world'}`
));

module.exports = api;

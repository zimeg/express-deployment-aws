const ApiBuilder = require('claudia-api-builder');

const api = new ApiBuilder();

api.get('/hello', () => 'hello world');

module.exports = api;

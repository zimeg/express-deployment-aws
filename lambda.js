const serverlessExpress = require('@vendia/serverless-express');
const app = require('./backend/server');
exports.handler = serverlessExpress({ app });

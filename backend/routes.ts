import express = require('express');

const controllers = require('./controllers.ts');

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hi from the API');
});

router.get('/square', controllers.square);

module.exports = router;

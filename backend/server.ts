import express = require('express');

const routes = require('./routes.ts');

const app = express();

app.get('/', (req, res) => res.send('Hello from Express!'));
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server running on port ${PORT}`);
});

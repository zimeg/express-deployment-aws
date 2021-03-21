const express = require('express');
require('dotenv').config();
const routes = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json({ msg: 'Hello from Express!' }));
app.use('/api', routes);

if (process.argv.includes('dev')) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
}

module.exports = app;

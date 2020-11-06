import express from 'express';
import data from './data.js';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Express server at your service.');
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(port, () => {
  console.log(`Express server listening on localhost:${port}`);
});

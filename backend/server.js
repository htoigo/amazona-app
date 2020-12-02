import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://localhost/amazona',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.send('Express server, at your service.');
});

app.use(
  (err, req, res, next) => {
    res.status(500).send( {message: err.message} );
  }
);

app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});

import express from 'express';

import usersRouter from './routes/users.router.js';
import productsRouter from './routes/products.router.js';

import __dirname from './utils.js';
import receptorMiddleware from './middlewares/receptor.js';

const app = express();

const PORT = process.env.PORT||8080;

const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`));

app.use(express.static(`${__dirname}/public`));
app.use(express.json());

app.use(receptorMiddleware);

app.use('/api/users',usersRouter);
app.use('/api/products',productsRouter);

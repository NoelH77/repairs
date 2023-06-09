const express = require('express');

// routes
const userRouter = require('./routes/users.routes');
const repairsRouter = require('./routes/repairs.routes');

const app = express();

app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/repairs', repairsRouter);

module.exports = app;

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./route/registerRoute')
const app = express()

mongoose.connect(process.env.MONGO_URI)

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('database connected successfully')
})

app.use(express.json());
app.use('/api/user', userRouter);

app.get('/', (req,res) => {
    res.send('welcome')
})


app.listen(3000, () => {
    console.log('server is running on port 3000')
})
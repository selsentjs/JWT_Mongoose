require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./route/userRoute')
const app = express()

mongoose.connect(process.env.MONGO_URI)

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('database connected successfully')
})


// middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json());


app.get('/api', (req,res) => {
   // throw new Error('error') - errorHandlerMiddleware handle this error
    res.send('welcome')
})

app.use('/api/user', userRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


app.listen(3000, () => {
    console.log('server is running on port 3000')
})
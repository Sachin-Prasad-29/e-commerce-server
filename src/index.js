require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const usersApiRouter = require('./routes/users.routes')
const productsApiRouter = require('./routes/products.routes')
const notFound = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler');
const connectDB = require('./db/connect')
const cors = require('cors');
const app = express();

//standard middleware to take input from the client side
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes middleware
app.get('/', (req, res) => {
    res.send('Express on Vercel');
});
app.use('/api/auth',usersApiRouter);
app.use('/api/product',productsApiRouter);

//error handing middlewares
app.use(notFound);//custom 404 page (middleware)
app.use(errorHandlerMiddleware);//custom error handler for handling all the errors


const port = process.env.PORT || 5001

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start();

module.exprots = app;
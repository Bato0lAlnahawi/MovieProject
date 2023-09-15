const express = require('express');
const path =require('path');
const cors = require('cors');
const bodyParser =require('body-parser');
const dotenv = require('dotenv')
dotenv.config()

const app = express();
//const apiPort= process.env.PORT || 3000;

const db = require('./models/db');
const MovieRouter= require('./routes/movieRouter');
const UserRouter= require('./routes/userRouter');
const ReviewRouter = require('./routes/reviewRouter');

//const middleware = require('./middlewares/checkAuthUser')
//db().catch(err => console.log(err));


app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req , res) => {
     res.send('Hello World!');
     })

app.use('/api' ,MovieRouter) ;
app.use('/api' ,UserRouter) ;
app.use('/api' ,ReviewRouter) ;

//use "process.env.PORT" instead of "apiPort= 3000"
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
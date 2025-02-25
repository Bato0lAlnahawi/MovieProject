const express = require('express');
const path =require('path');
const cors = require('cors');
const bodyParser =require('body-parser');

const app = express();
const apiPort= 3000;

const db = require('./models/db');
const MovieRouter= require('./routes/movieRouter');
const UserRouter= require('./routes/userRouter');
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
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
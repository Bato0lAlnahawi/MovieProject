const mongoose = require('mongoose');
 
//main().catch(err => console.log(err));

mongoose
 .connect('mongodb://127.0.0.1:27017/cinema', { useNewUrlParser: true })
 .then(() => {
    console.log('Connected to MongoDB');
  })
 .catch(err => {
 console.error('Connection error', err.message)
 })


/*
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
*/

const db = mongoose.connection;
module.exports= db ;
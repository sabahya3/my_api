const express = require('express');
const myRouter = require('./routes/product');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');

const app = express();



//Allow Access middle ware 

app.use(cors());



//BodyParser middleware
app.use(bodyParser.json());


// Routes Middle Ware

app.use('/products', myRouter);

mongoose.connect('mongodb+srv://ahmed:dTIm8PLHB133XpP6@cluster0.4lxon.mongodb.net/myDb?retryWrites=true&w=majority' , ()=>{
console.log('connected to mongo succefully');
app.listen( 8080, () => {
    console.log('server is running on port 8080');


});

});



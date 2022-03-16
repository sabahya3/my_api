const mongoose = require('mongoose');


const productModel = mongoose.Schema({
    title: String,
    desc: String,
    image: String,
    price:String

});



module.exports=mongoose.model('products',productModel);

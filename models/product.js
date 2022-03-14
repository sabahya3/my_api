const mongoose = require('mongoose');


const productModel = mongoose.Schema({
    title: String,
    desc: String,
    image: String

});



module.exports=mongoose.model('products',productModel);

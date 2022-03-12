const mongoose = require('mongoose');


const productModel = mongoose.Schema({
    title: String,
    desc: String,
    color: String

});



module.exports=mongoose.model('products',productModel);

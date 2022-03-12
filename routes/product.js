const express = require('express');

const router = express.Router();
const Product = require('../models/product');




router.get('/products', async (req, res) => {
    try {
        const product = await Product.find();

        res.json(product);

    } catch (err) {
        console.log(err);
    }
});

// get element by id 
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product);

    } catch (err) {
        console.log(err);
    }
});


// delete element by id 
router.patch('/products/:id', async (req, res) => {
    try {
        const product = await Product.updateOne({ "_id": req.params.id }, { "title": req.body.title });

        res.json(product);

    } catch (err) {
        console.log(err);
    }
});


// delete element by id 
router.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.deleteOne({ "_id": req.params.id });

        res.json(product);

    } catch (err) {
        console.log(err);
    }
});



router.post('/product', (req, res) => {
    // const name = req.body.name;
    // const price = req.body.price;

    const product = new Product({
        title: req.body.title,
        desc: req.body.desc,
        color: req.body.color
    });

    product.save().then((data) => {

        res.json({
            "message": "product created succefully",
            "data": data
        })

    }
    )



});


// table - > collection
// row - > document 
// column - > field 





module.exports = router;
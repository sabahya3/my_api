const express = require('express');

const router = express.Router();
const Product = require('../models/product');




router.get('/', async (req, res) => {
    try {
        const product = await Product.find();

        res.status(200).json(product);

    } catch (err) {
        console.log(err);
    }
});

// get element by id 
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);

    } catch (err) {
        console.log(err);
    }
});


// delete element by id 
router.patch('/:id', async (req, res) => {
    try {
        const product = await Product.updateOne({ "_id": req.params.id }, { "title": req.body.title, "image": req.body.image, "desc": req.body.des });

        res.json(product);

    } catch (err) {
        console.log(err);
    }
});


// delete element by id 
router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.deleteOne({ "_id": req.params.id });

        res.json(product);

    } catch (err) {
        console.log(err);
    }
});



router.post('/', (req, res) => {
    // const name = req.body.name;
    // const price = req.body.price;

    const product = new Product({
        title: req.body.title,
        desc: req.body.desc,
        image: req.body.image
    });

    product.save().then((data) => {

        res.status(201).json({
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
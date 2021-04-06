let customerModel = require('../models/customer_model')
let express = require('express')
let router = express.Router();
// create new customer
router.post('/customer',(req,res)=>{
    if(!req.body){
        return res.status(400).send('request body is missing')
    }
} )
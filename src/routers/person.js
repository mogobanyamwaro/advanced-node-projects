const express = require('express')
const router = express.Router();
// query string on the request property
router.get('/person',(req,res)=>{
    if(req.query.name){
     res.send(`you have requested a person,${req.query.name}`)

    }else{
             res.send('you have requested a person')
    }

} )
// param property on the request object
router.get('/person/:name',(req,res)=>{
     res.send(`you have requested a person,${req.params.name}`)
} )





module.exports = router;
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/databse');

const customerSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true,
        required:true,
    }
})

module.exports = mongoose.model('Customer',customerSchema)
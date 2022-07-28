const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Argonaute = new Schema({
    argonaute_name:{
        type: String,
      //  required: true
    } 
});
module.exports = mongoose.model('argonautes', Argonaute);
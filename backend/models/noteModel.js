const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const noteSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type: String,
        required:true,
    },
    importance:{
        type:Number,
        required:true,
    }
},{timestamps:true})

module.exports = mongoose.model('Note',noteSchema)
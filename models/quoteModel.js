import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    text:String,
    author:String,
    tags:[String],
    createdAt:{type:Date,default:Date.now}
})

const Quote = mongoose.model('Quote',quoteSchema);
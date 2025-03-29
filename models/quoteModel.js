import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    text:String,
    author:String,
    tags:[],
    createdAt:{type:Date,default:Date.now}
})

const Quote = mongoose.model('Quote',quoteSchema);
export default Quote
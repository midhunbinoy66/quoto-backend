import express from 'express';
import Quote from '../models/quoteModel.js';
const router = express.Router();

router.get('/random',async(req,res)=>{
    try {

        const count = await Quote.countDocuments();       
        const random = Math.floor(Math.random()*count);
        const quote = await Quote.findOne().skip(random)
        return res.json({status:1,quote})
        
    } catch (error) {
        console.error(error);
        res.json({status:0,message:'Internal server error'});
    }
})

export default router;
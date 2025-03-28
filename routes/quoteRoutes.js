import express from 'express';
const router = express.Router();

router.get('/random',async(req,res)=>{
    try {
        res.json({status:1,message:'Random quote route hit..'})
        
    } catch (error) {
        console.error(error);
        res.json({status:0,message:'Internal server error'});
    }
})

export default router;
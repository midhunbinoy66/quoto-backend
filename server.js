import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
import router  from   './routes/quoteRoutes.js';
import scrapeQuote from './worker/scraper.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/quotes',router);

connectDb().then(()=>{
    console.log('database connection established...');
})
app.listen(process.env.PORT,()=>{
    console.log(`server is alive ${process.env.PORT}`);
})
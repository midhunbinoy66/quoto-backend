import puppeteer from 'puppeteer';
import {parentPort} from 'worker_threads'
import Quote from '../models/quoteModel.js';

async function scrapeQuote(){

    try {
        const browser = await puppeteer.launch({headless:'new'});
        const page = await browser.newPage();
        await page.goto('https://www.quotationspage.com/random.php');
    
        const quotes = await page.evaluate(()=>{
            const quoteArray = Array.from(document.querySelectorAll('.quote'))
            const authorArray = Array.from(document.querySelectorAll('.author'))
            let result=[]
            for(let i=0;i<quoteArray.length;i++){
                let obj={};
                obj.text = quoteArray[i].innerText;
                obj.author = authorArray[i].innerText;
                obj.tags=[]
                
                result.push(obj);
            }
            return result;
        })
    
        await browser.close();        
        for (let quote of quotes) {
            try {
                const newQuote = new Quote(quote);
                await newQuote.save();
            } catch (err) {
                console.error("Error saving quote:", err);
            }
        }
        // parentPort.postMessage(`Scraped ${quotes.length} quotes successfully.`)
        console.log('successfull')
        
    } catch (error) {
        // parentPort.postMessage(`Error in worker: ${error.message}`);
        console.log(error)
    }

}

export  default scrapeQuote;
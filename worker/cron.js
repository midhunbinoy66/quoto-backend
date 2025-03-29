import {Worker} from 'worker_threads'

function startWorker() {
    const worker = new Worker('./worker/scraper.js');

    worker.on('message', msg => console.log(`[Worker] ${msg}`));
    worker.on('error', err => console.error(`[Worker Error] ${err.message}`));
    worker.on('exit', code => console.log(`[Worker] Exited with code ${code}`));
}

startWorker();

import express from 'express';


const app = express();

app.use(express.json());
app.use(express.static());

app.listen(process.env.PORT)
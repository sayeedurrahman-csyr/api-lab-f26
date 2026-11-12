import express from 'express';
import cors from 'cors';
import get from './routes/get.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/get', get);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Connected to DB and listening on port ${process.env.PORT}`);
});
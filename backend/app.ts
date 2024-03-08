import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './src/routes/router';
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running ');
});
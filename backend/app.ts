import express from 'express';
import partnerRoutes from './src/routes/router';
import * as dotenv from 'dotenv';
import ApplicationRouter from './src/routes/router';
dotenv.config();

const app = express();

app.use(express.json());


app.use(partnerRoutes);
app.use(ApplicationRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
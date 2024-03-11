import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './src/routes/router';
import organizationRouter from './src/routes/organizationRouter';
import partnerRouter from './src/routes/partnerRouter';
import userOrgRouter from './src/routes/userOrganizationRouter';
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(router);
app.use(organizationRouter)
app.use(partnerRouter)
app.use(userOrgRouter)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running ');
});
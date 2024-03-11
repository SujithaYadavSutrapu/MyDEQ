
import express from 'express';
import { createPartner } from '../controller/partnerController';

const partnerRouter = express.Router();


partnerRouter.post('/partners', createPartner); 


export default partnerRouter;

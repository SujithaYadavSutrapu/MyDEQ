import express from 'express';
import GetMyStuffApplicationController from '../controller/GetMyStuffApplicationController';
const router=express.Router();

router.get('/getmystuffapplication',GetMyStuffApplicationController.getMyStuffApplications);

export default router;
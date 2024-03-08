import express from 'express';
import GetMyStuffApplicationController from '../controller/GetMyStuffApplicationController';
const router=express.Router();

router.get('/getmystuffapplication',GetMyStuffApplicationController.getMyStuffApplications);
router.get("/filterMyStuffApplication",GetMyStuffApplicationController.filterMyStuffApplications)

export default router;
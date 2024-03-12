import express from 'express';
import applicationController from '../controller/ApplicationController'

const router = express.Router();

router.get('/applications',applicationController.getAllApplications )
router.post('/insertapplications',applicationController.insertApplications)
router.get('/searchApplication/:user_id',applicationController.searchApplication)
router.delete('/deleteApplication', applicationController.deleteApplication)

export default router;
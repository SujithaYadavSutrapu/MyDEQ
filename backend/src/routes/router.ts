import express from 'express';
import applicationController from '../controller/ApplicationController'

const ApplicationRouter = express.Router();

ApplicationRouter.get('/applications',applicationController.getAllApplications )
ApplicationRouter.post('/insertapplications',applicationController.insertApplications)
ApplicationRouter.get('/searchApplication/:user_id',applicationController.searchApplication)
ApplicationRouter.delete('/deleteApplication', applicationController.deleteApplication)

export default ApplicationRouter;
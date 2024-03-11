import express from 'express';
import applicationController from '../controller/ApplicationController'
import CategoryController from '../controller/CategoryController'



const router = express.Router();




router.get('/applications/:user_id',applicationController.getAllApplications )
router.post('/insertapplications',applicationController.insertApplications)
router.get('/searchApplication/:user_id',applicationController.searchApplication)
router.get('/getcategory',CategoryController.getAllCategory)

export default router;
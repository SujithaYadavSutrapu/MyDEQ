import express from "express";
import {createOrganization} from "../controller/organizationController"

const organizationRouter= express.Router();

organizationRouter.post("/createOrganization",createOrganization)

export default organizationRouter
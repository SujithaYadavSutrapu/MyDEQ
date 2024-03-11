import express from "express";
import { addUserOrganization, getUserOrganizationDetails } from "../controller/userOrganization";

const userOrgRouter=express.Router()

userOrgRouter.post("/addUserOrg",addUserOrganization)
userOrgRouter.get("/getUserOrgs",getUserOrganizationDetails)

export default userOrgRouter
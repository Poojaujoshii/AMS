import express from "express";
import { assignAsset, returnAssignedAsset } from "../Controllers/AdminController.js";
const adminRouter = express.Router();

//assign assets
adminRouter.post("/assign/asset",assignAsset)
//return assigned asset
adminRouter.put("/return/asset",returnAssignedAsset)
export default adminRouter;
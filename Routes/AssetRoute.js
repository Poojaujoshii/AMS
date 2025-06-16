import express from "express";
import { addAsset,deleteAsset,getAllAssets, updateAsset } from "../Controllers/AssetController.js";
import { adminVerify } from "../Middlewares/AdminVerifyMiddleware.js";
import { userVerify } from "../Middlewares/UserVerifyMiddleware.js";

const assetRouter = express.Router();
// add asset
assetRouter.get("/all",getAllAssets)
assetRouter.post("/add",adminVerify,addAsset)
assetRouter.put("/Update",adminVerify,updateAsset)
assetRouter.delete("/delete/:id",adminVerify,deleteAsset)


export default assetRouter;
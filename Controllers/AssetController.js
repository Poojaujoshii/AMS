import Asset from "../Models/Asset.js";
export const addAsset = async(req,res,next)=>{
    try{
        const assetDetails = new Asset(req.body);
        await assetDetails.save()
        res.status(201).send({message:"Asset Added"})
    }
    catch(error){
        next(error)//calls error handling middlewares
    }
}
export const getAllAssets = async(req,res,next)=>{
    try{
        const assets = await Asset.find();
        res.status(200).send(assets);
    }
    catch(error){
        next(error);
    }
}

export const deleteAsset = async (req,res,next)=>{
    try{
        const {id} = req.params
        await Asset.findByIdAndDelete({_id:id})
        res.status(200).send({message : "Asset Data Removed"})
    }
    catch(error){
        next(error);

    }
}

export const updateAsset = async(req,res,next)=>{
    try{
        const {id} = req.query;
        await Asset.findByIdAndUpdate({_id:id},{...req.body})
        res.status(200).send({message : "Asset Data Updated"})
    }
    catch(error){

    }
}
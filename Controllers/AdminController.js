import Employee from "../Models/Employee.js"
import Asset from "../Models/Asset.js"
import AssignedAsset from "../Models/AssignedAsset.js"


export const assignAsset = async (req, res, next) => {
    try {
        let { assetTag, employeeId, assignedAt } = req.body;

        let isAssetAvailable = await Asset.findOne({ assetTag });

        if (isAssetAvailable?.status === "Available") {
            let employee = await Employee.findOne({ employeeId });

            if (employee) {
                // Store asset ID and employee ID and the assignment
                const assignedAssetDetails = new AssignedAsset({
                    assetId: isAssetAvailable._id,
                    employeeId: employee._id,
                    assignedAt,
                });

                await assignedAssetDetails.save();

                // Update asset status and save
                isAssetAvailable.status = "Assigned";
                await isAssetAvailable.save();

                res.status(200).send({ message: "Asset Assigned Successfully" });
            } else {
                throw new Error("Invalid Employee ID");
            }
        } else {
            throw new Error("Invalid Asset Details or Already Assigned");
        }
    } catch (error) {
        next(error);
    }
};
export const returnAssignedAsset = async (req,res,next)=>{
    try{
        const {assetTag,returnedAt,returnedCondition,note} = req.body;
        const isAsset = await Asset.findOne({assetTag});
        if(isAsset.status=="Assigned"){
            const assignedAssetDetails=await AssignedAsset.findOne({assetId:isAsset._id})
            //modify the assigned asset details
           await AssignedAsset.updateOne({assetId:isAsset._id},
           { $set:{returnedAt,returnedCondition,note}})
           //modify the asset status to available
           isAsset.status = "Available"
           await isAsset.save();
           return res.status(200).send({message:"Asset Return successfully"})

        }else {
            throw new Error("Invalid Asset Details");
        }

    }catch(error){
        next(error)
    }
}
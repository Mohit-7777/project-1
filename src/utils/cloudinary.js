import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


//cloudinary.uploader.upload

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
     const response =  await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        console.log("Successfully uploaded", response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the file from the server as the file has not been uploaded on cloudinary
        return null
    }

}


export {uploadOnCloudinary}
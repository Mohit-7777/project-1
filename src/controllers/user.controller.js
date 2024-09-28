import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const registerUser = asyncHandler(async(req, res)=>{
        //get user details from frontend
        //validation - not empty
        //check if user already exists - username, email
        //check for images, check for avatars
        //upload them to cloudinary, avatars
        //create user object, create entry in db
        //remove password field and refresh token field from response
        //check for user creation
        //return response

// 




// req.body:
// Purpose: It contains the data from the body of an HTTP request, usually in the form of JSON, URL-encoded, or form data.
// Usage: This is typically used to handle standard form submissions or JSON data sent via POST, PUT, or PATCH requests.



const {fullName, email, username, password} = req.body;             
console.log("email :", email);


if ([fullName, email, username, password].some((fields)=> fields?.trim() === "")) {         //if fields are empty
  throw new ApiError(400, "All fields is required");
}


const existedUser = User.findOne({                              //to check if there exist a user with same username or email
    $or: [{username},{email}]
})

if(existedUser){
    throw new ApiError(409, "User with email or UserName already exist")
}

// req.files:
// Purpose: It is used to access files uploaded by the client in an HTTP request, typically through a form with enctype="multipart/form-data".
// Usage: You use req.files to handle file uploads, such as images, documents, or any other binary data.


const avatarLocalPath = req.files?.avatar[0]?.path;
const coverImageLocalPath = req.files?.coverIamge[0]?.path;

if(!avatarLocalPath){
    throw new ApiError(400,"Avatar file is required");
}

     const avatar =  await uploadOnCloudinary(avatarLocalPath)
     const coverIamge =  await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
         throw new ApiError(400, "Avatar file is required");
    }


    const user = await User.create(
       { 
        
        fullName,
        avatar: avatar.url,
        coverIamge : coverIamge?.url || "",
        email,
        password,
        username : username.toLowerCase(),
    }

)
const createdUser = await User.findById(user._id).select(               //_id is itself created by MongoDB
    "-password -refreshToken"
)


if(!createdUser){
    throw new ApiError(500, "Something went wrong while regestring the user"
    )
}




return res.status(201).json(
    new ApiResponse(200, createdUser, "User Registered Successfully")
)


    // res.status(200).json({
    //     message: "ok"
    // })
})


export {registerUser}
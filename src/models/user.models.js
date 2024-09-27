import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { decrypt } from "dotenv";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  username: {
    type: String, //cloudinary
    required: true,
  },
  avatar: {
    type: String, //cloudinary
    required: true,
  },
  coverImage: {
    type: String, //cloudinary
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  username: {
    type: String,
    required: [true,"Password is Required "]
  },
  refreshToken:{
    type: String,
  }
},{
    timestamps:true
});

// userSchema.pre("save",)              this means it should work before getting saved on the db. pre is a middleware we also have post
userSchema.pre("save", async function (next){
  if(!this.isModified("password"))return next()     //if password is not getting modified or updated


    this.password = decrypt.hash(this.password, 10)     //hash(what to hash, No. of rounds)
    next()                                          //it wouldve hashed everytime we change anything like avatar or sth
})                                                  //so we used if statement to avoid this situation


userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password)       //await is used cuz in cryptography it uses computation power
}                                                             // which takes some time to calculate


userSchema.methods.generateAccessToken = function() {
 return jwt.sign(
   {
     //require payload
     _id: this._id,
     email: this._email,
     username: this._email,
     fullName: this._fullName,
   },
   process.env.ACCESS_TOKEN_SECRET,
   {
     expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
   }
 );
}

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      //require payload
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema)
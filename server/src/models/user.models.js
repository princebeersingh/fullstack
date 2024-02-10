import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";  // bearer token its like a key
import bcrypt from "bcrypt";

const userSchema=new Schema({
  userName:{
    type:String,
    required:true,
    unique:true,
    lowerCase:true,
    trim:true,
    index:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowerCase:true,
    trim:true,
  },
  fullname:{
    type:String,
    required:true,
    trim:true,
    index:true
  },
  avatar:{
    type:String,//cloudnary url free required
    required:true,
  },
  coverImage:{
    type:String,
  },
  password:{
    type:String,
    required:[true,"password is required"],
  },
  refreshToken:{
    type:String,
  },
  creadtedAt:{timestamps:true,}
})
userSchema.pre("save",async function(next){
  if(!this.isModified("password"))return next();//pass encription checking logic

  this.password=bcrypt.hash(this.password,10)
  next()
})
userSchema.methods.isPasswordCorrect=async function(password){
  return await bcrypt.compare(password,this.password);// crosscheck password
}

userSchema.methods.generateAccessToken=function(){
  jwt.sign({
    _id:this._id,
    email:this.email,
    userName:this.userName,
    fullname:this.fullname,
  },process.env.ACCESS_TOKEN_SECRET,{
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
  })
}
userSchema.methods.generateRefreshToken=function(){
  jwt.sign({
    _id:this._id,
  },process.env.REFRESH_TOKEN_SECRET,{
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY,
  })
}
export const User=mongoose.model("User",userSchema)
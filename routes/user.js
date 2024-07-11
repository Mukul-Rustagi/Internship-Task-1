const express=require("express");
const router=express.Router();

const {login,signup,forgotPassword}=require("../controller/Auth.js");


router.post("/login",login);
router.post("/signup",signup);
router.post("/forgotPassword",forgotPassword);

module.exports=router;
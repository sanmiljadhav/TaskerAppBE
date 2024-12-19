

const express = require("express"); 
var router = express.Router(); 
 
const FcmController = require("../controller/fcmController");
const AuthHelper = require("../helper/AuthHelper"); 

let validateToken = AuthHelper.validateToken; 

router.put("/update-fcm-token",validateToken, FcmController.updateFcmToken); 
 

module.exports = router; 

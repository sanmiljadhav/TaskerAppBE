const express = require("express"); 
var router = express.Router(); 
 

const AuthController = require("../controller/auth"); 


router.get('/checkNgrokConnection', AuthController.checkNgrokConnection)
router.post("/signUp", AuthController.signUp); 
router.post("/signIn", AuthController.SignIn); 


module.exports = router

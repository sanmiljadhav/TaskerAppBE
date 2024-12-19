const bcrypt = require("bcrypt");
const { User } = require("../models/user");

const AuthHelper = require("../helper/AuthHelper");



const FcmController = module.exports;

FcmController.updateFcmToken = async (req, res) => {
    try {
        const userId = req.user.id; // Extracted from authentication middleware
        const fcmToken = req.headers["x-fcm-token"];    
        if (!fcmToken) {
          return res.status(400).json({ message: "FCM token is required" });
        }
    
        // Find the user and update the FCM token
        const user = await User.findByIdAndUpdate(
          userId,
          { fcmToken },
          { new: true } // Return the updated user document
        );
    
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
    
        return res.status(200).json({ message: "FCM token updated successfully" });
      } catch (error) {
        console.error("Error updating FCM token:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
 
};


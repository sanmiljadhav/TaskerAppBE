const express = require("express"); 
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const admin = require("firebase-admin");
const serviceAccountKey = require("./firebase/serviceAccountKey.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccountKey),
//   });

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });

 
const app = express(); 
const PORT = process.env.PORT || 8080; 
const mongoUri = process.env.DATABASE2; 
mongoose.set("strictQuery", false); 



mongoose.connect(mongoUri)
.then(()=>{
    console.log("MongoDB Conttected")
}); 


const authRoutes = require("./routes/authRoutes"); 
const taskRoutes = require("./routes/taskRoutes")
const workerRoutes = require("./routes/workerRoutes");  
const assigneeRoutes = require('./routes/assigneeRoutes'); 
const fcmRoutes = require('./routes/fcmRoutes')

app.use(cors()); 
app.use(bodyParser.json()); 
app.use(cookieParser());  


app.use("/api/v1", authRoutes);
app.use("/api/v1", taskRoutes); 
app.use("/api/v1", workerRoutes); 
app.use("/api/v1", assigneeRoutes);
app.use("/api/v1",fcmRoutes) 

app.listen(PORT,()=> console.log("Server is running on port : " + PORT)); 
module.exports = {app,admin};


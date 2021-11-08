require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoute");
const path = __dirname + '/frontend/build/';

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5000"]
  })
);
app.use(express.json());
app.use(express.static(path));
mongoose
  .connect("mongodb+srv://admin-ravi:test-123@cluster0.edcha.mongodb.net/authDB")
  .then(
    () => {
      console.log("mongoDB connected");
    },
    (error) => {
      console.log(error, "error");
    }
    );
    
    app.get("/",(req,res)=>{
      res.sendFile(path+"index.html");
    });
    app.use("/api", authRoutes);
    app.use("/user", userRoutes);
    
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
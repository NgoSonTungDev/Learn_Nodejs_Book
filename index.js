const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRouter = require("./routes/author");

//đọc file env
dotenv.config();

//connect database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("connect to mongoDB");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan());

//route
app.use("/v1/author", authorRouter);

app.listen(8000, () => {
  console.log("server is running....");
});

// app.get("/api",(req,res)=>{
//     res.status(200).json("Hello");
// })
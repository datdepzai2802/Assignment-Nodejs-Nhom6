import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
//
const app = express();
app.use(express.json());
app.use(cors());
//

//connect database
mongoose.connect("mongodb://localhost:27017/AsmNodejs", () => {
  console.log("successfully!!!");
});

app.listen(process.env.PORT, () => {
  console.log(`Kết nối thành công, cổng ${process.env.PORT}`);
});

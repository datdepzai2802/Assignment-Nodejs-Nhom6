import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

//router
import routerProducts from "./routers/products";
import routerCategory from "./routers/categories";
import routerAuth from "./routers/auth";
import routerAddress from "./routers/address";
import routerDetailAddress from "./routers/detailAddress";
import routerSeach from "./routers/search";
import routerUsers from "./routers/users";
//middlewares
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routerProducts);
app.use("/api", routerCategory);
app.use("/api", routerAuth);
app.use("/api", routerAddress);
app.use("/api", routerDetailAddress);
app.use("/api", routerSeach);
app.use("/api", routerUsers);

//connect database
mongoose.connect("mongodb://127.0.0.1:27017/AsmNodejs", () => {
  console.log("successfully");
});

app.listen(process.env.PORT, () => {
  console.log(`Kết nối thành công, cổng ${process.env.PORT}`);
});

import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    name:{
        type: String
    }
})

export default mongoose.model("Address", addressSchema);
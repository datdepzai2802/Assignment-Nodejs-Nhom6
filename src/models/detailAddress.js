import mongoose,{ ObjectId } from "mongoose";

const detailAddressSchema = mongoose.Schema({
    name: {
        type: String,
    },
    phoneNumber:{
        type: String,
    },
    icon:{
        type: String,
    },
    addressId:{
        type : ObjectId,
        ref: "address"
    }
})

export default mongoose.model("DetailAdress", detailAddressSchema);
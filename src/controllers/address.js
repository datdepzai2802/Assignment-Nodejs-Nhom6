import Address from "../models/address";
import detailAddress from "../models/detailAddress";

//list toàn bộ khu vực bán hàng
export const list = async(req,res)=>{
    try {
       const address = await Address.find();
       res.json(address); 
    } catch (error) {
        return res.status(400).json({
            error: "Không có khu vực bán hàng"
        })
    }
}

//chi tiết
export const read = async(req,res)=>{
    try {
        const id = req.params.id;
        const address = await Address.findOne({_id:id}).exec();
        const detailAdd = await detailAddress.find({addressId:address}).select("-addresses").exec();
        res.json({
            address, detailAdd
        })
    } catch (error) {
        return res.status(400).json({
            error:"Không tìm thấy chi tiết khu vực bán hàng"
        })
    }
}
//thêm khu vực bán hàng
export const create = async(req,res)=>{
    try {
        const address = await new Address(req.body).save();
        res.json(address);
    } catch (error) {
        return res.status(400).json({
            error: "Không thêm được khu vực bán hàng"
        })
    }
}

//sửa khu vực bán hàng
export const update = async(req, res)=>{
    try {
        const id = req.params.id;
        const address = await Address.findOneAndUpdate({_id:id}, req.body, {new:true}).exec();
        res.json(address);
    } catch (error) {
        return res.status(400).json({
            error: "Không sửa được khu vực bán hàng"
        })
    }
}

//xóa khu vực bán hàng
export const remove = async(req,res)=>{
    try {
        const id = req.params.id;
        const address = await Address.findOneAndDelete({_id:id}).exec();
        res.json(address);
    } catch (error) {
        return res.status(400).json({
            error: "Không xóa được khu vực"
        })
    }
}
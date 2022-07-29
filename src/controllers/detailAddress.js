import DetailAddress from "../models/detailAddress";

export const list = async(req,res)=>{
    try {
        const detailAdd = await DetailAddress.find();
        res.json(detailAdd);
    } catch (error) {
        return res.status(400).json({
            error: "Không tìm thấy địa chỉ cửa hàng"
        })
    }
}

export const read = async(req,res)=>{
    try {
        const id = req.params.id;
        const detailAdd = await DetailAddress.findOne({_id:id}).exec();
        res.json(detailAdd);
    } catch (error) {
        return res.status(400).json({
            error: "Không tìm thấy chi tiết cửa hàng"
        })
    }
}

export const create = async(req,res)=>{
    try {
        const detailAdd = await new DetailAddress(req.body).save();
        res.json(detailAdd);
    } catch (error) {
        return res.status(400).json({
            error: "Không thêm được địa chỉ cửa hàng"
        })
    }
}

export const update = async(req,res)=>{
    try {
       const id = req.params.id;
       const detailAdd = await DetailAddress.findOneAndUpdate({_id:id}, req.body, {new:true}).exec();
       res.json(detailAdd); 
    } catch (error) {
        return res.status(400).json({
            error: "Không cập nhật được địa chỉ cửa hàng"
        })
    }
}

export const remove = async(req, res)=>{
    try {
        const id = req.params.id;
        const detailAdd = await DetailAddress.findOneAndDelete({_id:id}).exec();
        res.json(detailAdd);
    } catch (error) {
        return res.status(400).json({
            error:"Không xóa được địa chỉ cửa hàng"
        })
    }
}
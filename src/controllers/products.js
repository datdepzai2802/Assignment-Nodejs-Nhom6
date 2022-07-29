import Products from "../models/products";

//list toàn bộ sản phẩm
export const list = async(req,res)=>{
    try {
        const products = await Products.find();
        res.json(products);
    } catch (error) {
        return res.status(400).json({
            error: "Không có sản phẩm nào"
        })
    }
}

//Xem chi tiết sản phẩm
export const read = async(req, res)=>{
    try {
        const id = req.params.id;
        const products = await Products.findOne({_id:id}).exec();
        res.json(products);
    } catch (error) {
        return res.status(400).json({
            error: "Không tìm thấy sản phẩm"
        })
    }
}

//thêm mới sản phẩm
export const create = async(req,res)=>{
    try {
        const products = await new Products(req.body).save();
        res.json(products);
    } catch (error) {
        return res.status(400).json({
            error: "Không thêm được sản phẩm"
        })
    }
}

//cập nhật sản phẩm
export const update = async(req,res)=>{
    try {
        const id = req.params.id;
        const products = await Products.findOneAndUpdate({_id:id}, req.body,{new: true}).exec();
        res.json(products);
    } catch (error) {
        return res.status(400).json({
            error: "Không cập nhật được sản phẩm"
        })
    }
}

//xóa sản phẩm
export const remove = async(req, res)=>{
    try {
        const id = req.params.id;
        const products = await Products.findOneAndDelete({_id:id}).exec();
        res.json(products);
    } catch (error) {
        return res.status(400).json({
            error: "Không xóa được sản phẩm"
        })
    }
}
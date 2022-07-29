import Categories from "../models/categories";
import Products from "../models/products"

//list category
export const list = async(req,res)=>{
    try {
        const category = await Categories.find();
        res.json(category);
    } catch (error) {
        return res.status(400).json({
            error: "Không có sản phẩm nào"
        })
    }
}

//chi tiết 
export const read = async(req,res)=>{
    try {
        const id = req.params.id;
        const category = await Categories.findOne({_id:id}).exec();
        const products = await Products.find({categoryId: category}).select("-categories").exec();
        res.json({
            category, products
        })
    } catch (error) {
        return res.status(400).json({
            error: "Không tìm thấy category"
        })
    }
}

//thêm mới category
export const create = async(req,res)=>{
    try {
        const category = await new Categories(req.body).save();
        res.json(category);
    } catch (error) {
        return res.status(400).json({
            error: "Không thêm được category"
        })
    }
}

//cập nhật category
export const update = async(req,res)=>{
    try {
        const id = req.params.id;
        const category = await Categories.findOneAndUpdate({_id:id}, req.body,{new:true}).exec();
        res.json(category);
    } catch (error) {
        return res.status(400).json({
            error: "Không cập nhật được category"
        })
    }
}

//xóa category
export const remove = async(req,res)=>{
    try {
        const id = req.params.id;
        const category = await Categories.findOneAndDelete({_id:id}).exec();
        res.json(category);
    } catch (error) {
        return res.status(400).json({
            error: "Không xóa được category"
        })
    }
}
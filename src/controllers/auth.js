import Users from "../models/users";
import jwt from "jsonwebtoken";

export const signup = async(req, res)=>{
    try {
        const exitEmail = await Users.findOne({email: req.body.email}).exec();
        if(exitEmail){
            return res.status(400).json({
                message: "Email đã tồn tại, vui lòng nhập email khác"
            })
        }
        const users = await Users(req.body).save();
        if(users){
            return res.status(200).json({
                users:{
                    email: users.email,
                    name: users.name
                }
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: "Đăng kí không thành công",
            error
        })
    }
}

export const signin = async(req, res)=>{
    try {
        const users = await Users.findOne({email: req.body.email}).exec();
        if(!users){
            return res.status(400).json({
                message: "Email không tồn tại"
            })
        }
        if(!users.authenticate(req.body.password)){
            return res.status(400).json({
                message: "Sai mật khẩu"
            })
        }

        const token = jwt.sign({id:users._id}, "123456", {expiresIn: 60 *60});
        return res.status(200).json({
            token,
            users:{
                id: users._id,
                email: users.email
            }
        })
    } catch (error) {
        // return res.status(400).json({
        //     message: "Đăng nhập không thành công",
        //     error
        // })
    }
}
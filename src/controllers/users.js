import Users from "../models/users";

export const userById = async(req,res,next,id)=>{
    try {
        const users = await Users.findById(id).exec();
        if(!users){
            return res.status(400).json({
                message: "Không tìm thấy users"
            })
        }
        users.password = undefined;
        req.profile = users;
        next()
    } catch (error) {
        return res.status(400).json({
            error
        })
    }
}
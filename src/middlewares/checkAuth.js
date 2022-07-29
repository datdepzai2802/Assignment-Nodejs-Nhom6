const { expressjwt: expressJwt } = require("express-jwt");

export const requireSignin = expressJwt({
    algorithms: ["HS256"],
    secret: "123456",
    requestProperty: "auth",
})

export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.auth.id;
    if (status) {
        next();
    } else {
        return res.status(400).json({
            message: "Bạn không phải là thành viên của hệ thống"
        })
    }
}

export const isAdmin = (req, res, next)=>{
    if(req.profile.role == 0){
        return res.status(400).json({
            message: "Bạn không phải là quản trị viên"
        })
    }
    next();
}
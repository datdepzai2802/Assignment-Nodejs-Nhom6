import Users from "../models/users";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const exitEmail = await Users.findOne({ email: req.body.email }).exec();
    if (exitEmail) {
      return res.status(400).json({
        message: "Email đã tồn tại, vui lòng nhập email khác",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);

    const newUser = new Users({
      name: req.body.name,
      email: req.body.email,
      password: hashed,
    });
    // console.log(newUser);
    const user = await newUser.save();
    if (user) res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      message: "Đăng kí không thành công",
      error,
    });
  }
};

export const signin = async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email }).exec();
    if (!user) {
      return res.status(400).json({
        message: "Email không tồn tại",
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({
        message: "Sai mật khẩu",
      });
    }

    if (user && validPassword) {
      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
          admin: user.admin,
        },
        process.env.JWT_KEY,
        { expiresIn: "1d" }
      );
      user.password = undefined;
      return res.status(200).json({ user, token });
    }
  } catch (error) {
    return res.status(400).json({
      error: "Đăng nhập không thành công",
    });
  }
};

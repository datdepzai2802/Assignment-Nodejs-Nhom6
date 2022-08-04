import Users from "../models/users";

export const UsersGetAll = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({
      error: "Không có users",
    });
  }
};

export const UsersRemove = async (req, res) => {
  try {
    const users = await Users.findById(req.params.id).exec();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({
      error: "Xóa users thất bại",
    });
  }
};

export const userById = async (req, res, next, id) => {
  try {
    const users = await Users.findById(id).exec();
    if (!users) {
      return res.status(400).json({
        message: "Không tìm thấy users",
      });
    }
    users.password = undefined;
    req.profile = users;
    next();
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

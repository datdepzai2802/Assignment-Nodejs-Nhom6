import Users from "../models/users";

export const UsersGetAll = async (req, res) => {
  try {
    const user = await Users.find();
    res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      error: "Không có users",
    });
  }
};

export const UsersGetOne = async(req,res)=>{
  try {
      const id = req.params.id;
      const user = await Users.findOne({_id:id}).exec();
     
      res.json({
        user
      })
  } catch (error) {
      return res.status(400).json({
          error: "Không tìm thấy user"
      })
  }
}

export const UsersRemove = async (req, res) => {
  try {
    const user = await Users.findOneAndDelete(req.params.id).exec();
    // console.log(users);
    res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({
      error: "Xóa users thất bại",
    });
  }
};

export const create = async(req,res)=>{
  try {
      const user = await new Users(req.body).save();
      res.json(user);
  } catch (error) {
      return res.status(400).json({
          error: "Không thêm được users"
      })
  }
}

export const update = async(req, res)=>{
  try {
      const id = req.params.id;
      const user = await Users.findOneAndUpdate({_id:id}, req.body, {new:true}).exec();
      res.json(user);
  } catch (error) {
      return res.status(400).json({
          error: "Không sửa được user"
      })
  }
}



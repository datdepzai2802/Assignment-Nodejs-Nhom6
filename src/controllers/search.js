import Products from "../models/products";

export const listSearch = async (req, res, next) => {
  try {
    let objWhere = {};
    const searchData = req.query.search;
    // console.log(searchData);
    if (searchData !== "") objWhere.name = new RegExp(searchData, "i");
    console.log(objWhere.price);
    const data = await Products.find(objWhere);
    // console.log(data);
    res.json(data);
  } catch (error) {
    res.status(400).json({
      message: "error",
    });
  }
};

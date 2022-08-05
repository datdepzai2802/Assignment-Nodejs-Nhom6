import jwt from "jsonwebtoken";

export const veryfiToken = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, (error, user) => {
      if (error) {
        res.status(400).json("token khong co gia tri");
      }
      req.user = user;
      //   console.log(req.user);
      next();
    });
  } else {
    res.status(400).json("ban khong phai thanh vien he thong!");
  }
};

export const checkAdmin = (req, res, next) => {
  veryfiToken(req, res, () => {
    // console.log(req.user);
  });
};

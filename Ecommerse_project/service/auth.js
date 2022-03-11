import jwt from "jsonwebtoken";
import User from "../models/user.js";
import "dotenv/config";

function verifyToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ message: "Access Denied" });
    return;
  }

  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  User.findOne({ _id: decoded.id })
    .then((result) => {
      req.user = result;
      next();
    })
    .catch((err) => {
      res.status(403).json("Access Denied");
    });
}
export default verifyToken;
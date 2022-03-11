import User from "../models/user.js";

class UserController {
  showAllUser(req, res) {
    User.find()
      .then((data) => {
        res.status(200).send({ success: true, data: data });
      })
      .catch((err) => {
        res.status(500).json({ success: false, message: err });
      });
  }

  getUserById(req, res) {
    console.log(req.query.id);
    const id = req.query?.id;
    User.findOne({ _id: id })
      .then((data) => {
        res.status(200).send({ success: true, data: data });
      })
      .catch((err) => {
        res.status(500).json({ success: false, message: err });
      });
  }

  getUserByUsername(req, res) {
    const username = req.query?.username;
    User.findOne({ username: username })
      .then((data) => {
        res.status(200).send({ success: true, data: data });
      })
      .catch((err) => {
        res.status(500).json({ success: false, message: err });
      });
  }
}

export default UserController;
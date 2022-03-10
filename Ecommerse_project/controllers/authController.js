import bcrypt from "bcrypt";
import User from "../modules/user.js";
import jsonwebtoken from "jsonwebtoken";
import "dotenv/config";

const SALT_ROUNDS = 10;
class AuthController {
  register(req, res, next) {
    const {
      username,
      password,
      firstName,
      lastName,
      contact,
      address,
      avatarUrl,
      gender
    } = req.body;

    const hash = bcrypt.hashSync(password, SALT_ROUNDS);

    const user = new User({
      username: username,
      password: hash,
      firstName: firstName,
      lastName: lastName,
      contact: contact,
      address: address,
      avatarUrl: avatarUrl,
      gender: gender
    });
    user
      .save()
      .then((result) => {
        res
          .status(200)
          .json({ message: "Registration Successful", success: true });
      })
      .catch((err) => {
        res.status(500).json({ message: err, success: false });
      });
  }

  login(req, res, next) {
    console.log(req.body);
    const { username, password } = req.body;
    User.findOne({ username: username })
      .then((data) => {
        if (!data) return this.sendInvalidMessage(res);
        bcrypt.compare(password, data.password, (err, result) => {
          if (!result) return this.sendInvalidMessage(res);
          // login successful
          jsonwebtoken.sign(
            { id: result._id },
            process.env.SECRET_KEY,
            (err, token) => {
              if (err) console.log(err);
              data.authTokens.push({ token: token });
              res.status(200).redirect("/index");
            }
          );
        });
      })
      .catch((err) => {
        res.status(500).json({ message: err, success: false });
      });
  }
  sendInvalidMessage(res) {
    return res.status(401).json({
      message: "Login Failed. Invalid username or password",
      success: false
    });
  }
}

export default AuthController;
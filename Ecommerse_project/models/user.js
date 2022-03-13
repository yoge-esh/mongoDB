import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import "dotenv/config";

const SCHEMA = mongoose.Schema;

const USERSCHEMA = new SCHEMA({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    required: true
  },
  authTokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

USERSCHEMA.methods.generateAuthToken = async function () {
  const token = jwt.sign({ id: this._id }, process.env.SECRET_KEY);
  this.authToken = await this.authTokens.contact({ token });
  await this.save();
  return token;
};

const user = mongoose.model("user", USERSCHEMA);

export default user;
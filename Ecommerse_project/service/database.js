import mongoose from "mongoose";

function connectDB(params) {
  mongoose
    .connect("mongodb://127.0.0.1:27017/eCommerceProject", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log("database connection unsuccessful", err);
    });
}
export default connectDB;
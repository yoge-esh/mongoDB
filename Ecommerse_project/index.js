import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import "dotenv/config";
import user from "./routes/user.js";
import product from "./routes/product.js";
import db from "./service/database.js";
import verifyToken from "./service/auth.js";

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.listen(3000, () => {
  db();
  console.log(`Server started at port 3000`);
});

//api routes
app.use(user);
app.use(product);

// ui routes
app.get("/", (req, res) => {
  res.render("login.ejs");
});
app.get("/index", verifyToken, (req, res) => {
  res.render("index.ejs");
});
app.get("/createProduct", verifyToken, (req, res) => {
  res.render("createProduct.ejs");
});
import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import user from "./routes/user.js";
import db from "./service/database.js";

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(3000, () => {
  db();
  console.log(`Server started at port 3000`);
});

//api routes
app.use(user);

// ui routes
app.get("/", (req, res) => {
  res.render("login.ejs");
});
app.get("/index", (req, res) => {
  res.render("index.ejs");
});
import mongoose from "mongoose";
import Jwt from "jsonwebtoken";
import "dotenv/config";
import Product from "./product";
import User from "./user";

const SCHEMA = mongoose.Schema;

const CARTSCHEMA = new SCHEMA({
    productId: {
        type: SCHEMA.Types.ObjectId,
        ref: Product,
    },
    userId: {
        type: SCHEMA.Types.ObjectId,
        ref: User,
    },
});

const cart = mongoose.model("cart", CARTSCHEMA);

export default cart;
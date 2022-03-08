import mongoose from "mongoose";
import User from "./user";
import Category from "./category";

const SCHEMA = mongoose.Schema;
const productSchema = new SCHEMA({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    shortDescription:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    category:{
        type: SCHEMA.Types.ObjectId,
        ref: Category,
    },
    cretor:{
        type: SCHEMA.Types.ObjectId,
        ref: User,
    },
    slug:{
        type: String,
        required: true
    }
});

export default productSchema;
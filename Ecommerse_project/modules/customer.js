import mongoose from "mongoose";
import userSchema from "./user";

const SCHEMA = mongoose.Schema;
const productSchema = new SCHEMA({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    contactNumber:{
        type: String,
        required: true
    },
    streetline1:{
        type: String,
        required: true
    },
    streetline2:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    avatarUrl:{
        type: String,
        required: true
    },
    gender:{
        type: Number,
        required: true
    }
});

export default userSchema;
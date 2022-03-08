import mongoose from "mongoose";

const SCHEMA = mongoose.Schema;
const categorySchema = new SCHEMA({
    categoryName:{
        type: String,
        required: true    
    }
});

export default categorySchema;
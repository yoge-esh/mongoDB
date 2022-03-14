import mongoose from "mongoose";
const SCHEMA = mongoose.Schema;

const CATEGORYSCHEMA = new SCHEMA({
    name: {
        type: String,
        required: true,
    },
});

const category = mongoose.model("category", CATEGORYSCHEMA);

export default category;
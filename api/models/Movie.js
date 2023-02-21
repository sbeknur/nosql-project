import mongoose from "mongoose";
const { Schema } = mongoose;

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
    },
    desc: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    cinemas: {
        type: [String],
    },
});

export default mongoose.model("Movie", MovieSchema);

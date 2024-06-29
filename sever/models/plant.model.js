import mongoose, { Schema } from "mongoose";

const plantSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
    category: {
        type: String,
        enum: ['indoor', 'outdoor', 'rare', 'exotic', 'easy to care', 'fruit', 'flower', 'cacti', 'herb'],
        required: true,
    },
    careInstructions: {
        type: String,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, { timestamps: true })

export const Plant = mongoose.model('Plant', plantSchema);
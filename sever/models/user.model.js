import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    }
}, { timestamps: true })

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Method to generate JWT token 
userSchema.methods.generateJwtToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRY
        }
    )
}

export const User = mongoose.model('User', userSchema);
import { compareSync } from "bcrypt";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { wrapAsync } from "../utils/wrapAsync.js";

const getToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const token = user.generateJwtToken();

        user.token = token;
        await user.save({ validateBeforeSave: false })

        return token
    } catch (err) {
        throw new ApiError(500, "Something went wrong when creating token")
    }
}

const options = {
    httpOnly: true,
    secure: true,
}

const registerUser = wrapAsync(async (req, res) => {
    const { userName, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        throw new ApiError(400, 'User already exists with email');
    }

    const user = await User.create({ userName, email, password });
    await user.save();

    const userCreated = await User.findById(user._id).select("-password -token")

    if (!userCreated) {
        throw new ApiError(500, "Something went wrong when registering the user");
    }

    res.status(200).json(
        new ApiResponse(200, userCreated, "User created successfully")
    )
})


const loginUser = wrapAsync(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
        throw new ApiError(400, "Invalid email or password")
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        throw new ApiError(400, 'Wrong user credentials!');
    }

    const token = await getToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -token")

    res.status(200)
        .cookie("token", token, options)
        .json(
            new ApiResponse(200, { loggedInUser, token }, "User logged in successfully")
        )

})

export { registerUser, loginUser }
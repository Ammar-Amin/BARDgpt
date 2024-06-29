import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { wrapAsync } from "../utils/wrapAsync.js";

const registerUser = wrapAsync(async (req, res) => {
    const { userName, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        throw new ApiError(400, 'User already exists with email');
    }

    const user = await User.create({ userName, email, password });
    await user.save();

    const userCreated = await User.findById(user._id).select("-password")

    if (!userCreated) {
        throw new ApiError(500, "Something went wrong when registering the user");
    }

    res.status(200).json(
        new ApiResponse(200, userCreated, "User created successfully")
    )
})

export { registerUser }
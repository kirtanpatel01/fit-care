import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generrateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(
            500,
            "Something went wrong while generating refresh and access token!",
        );
    }
};

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, username, email, phone, password, confirmPassword } = req.body;
    if (
        [fullName, username, email, phone, password, confirmPassword].some(
            (field) => !field,
        )
    ) {
        throw new ApiError(400, "All fields are required!");
    }

    let profileImageUrl = "";
    if (req.file) {
        const profileImagePath = req.file?.path;
        if (!profileImagePath) {
            throw new ApiError(422, "Profile image not found!");
        }

        profileImageUrl = await uploadOnCloudinary(profileImagePath);
        if (!profileImageUrl) {
            throw new ApiError(
                422,
                "Profile image not uploaded on cloudinary!",
            );
        }
    }

    const userExists = await User.findOne({
        $or: [{ username }, { email }, { phone }],
    });

    if (userExists) {
        throw new ApiError(409, "User already exists!");
    }

    if(password !== confirmPassword) {
        throw new ApiError(400, 'Password and confirm password are not same!')
    }

    const user = await User.create({
        username,
        fullName,
        email,
        phone,
        password,
        profileImage: profileImageUrl || "",
    });

    return res
        .status(200)
        .json(
            new ApiResponse(200, user, "User created successfully!"),
        );
});

const loginUser = asyncHandler(async (req, res) => {});

const logoutUser = asyncHandler(async (req, res) => {});

export { registerUser, loginUser, logoutUser };

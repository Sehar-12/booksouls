import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Full name is required'], // Ensure fullname is required
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
});

// Create the user model
const User = mongoose.model("User", userSchema);

export default User;

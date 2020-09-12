const mongoose = require("mongoose");

//user schema
let userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    phoneNumber: Number,
    profileImage: String,
    role: String,
    serviceProvider: Boolean,
    priceRange: Number,
    feedBack: [String],
    rating: Number,
});

//creating models for the schema
let User = mongoose.model("User", userSchema, "users");

module.exports.User = User;
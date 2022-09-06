const mongoose = require("mongoose");
const validator = require("validator");
const uniqueValidator = require('mongoose-unique-validator');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"],
        maxlength: [60, "Name cannot exceed 60 character"],
        minlength: [3, "Name cannot be less than 3 character"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        trim: true,
        validate: [validator.isEmail, "Please enter valid email"],
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minlength: [6, "Password cannot be less than 6 character"],
        select: false,
    },
    phoneNo: {
        type: Number,
        required: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /\d{10}/.test(v);
            },
        },
    },
    houseNo: {
        type: String,
        required: true,
        trim: true,
    },
    sector: {
        type: String,
        required: true,
        trim: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    state: {
        type: String,
        required: true,
        trim: true,
    },
    pincode: {
        type: Number,
        required: true,
        trim: true,
    }

}, { timestamps: true });
UserSchema.plugin(uniqueValidator, { message: '{PATH} already exists!' });
const User = mongoose.model("user", UserSchema);
User.createIndexes();
module.exports = User;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
    languages: {
        type: [String], 
        default: ["English", "Spanish", "French"], 
    },
    selected_language:{
        type:String,
        require:false,
        default:"English",
    },
    score:{
        type:Number,
        default:0,
    }


})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);

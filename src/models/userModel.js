import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    flag: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },

    q1: {
        type: String,
      },
      q2: {
        type: String,
      },
      q3: {
        type: String,
      },
      q4: {
        type: String,
      },
      q5: {
        type: String,
      },
      q6: {
        type: String,
      },
      q7: {
        type: String,
      },
      q8: {
        type: String,
      },
      q9: {
        type: String,
      },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
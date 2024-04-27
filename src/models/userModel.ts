


import mongoose, { Schema, Document } from "mongoose";

interface UserInterface extends Document {
    username: string;
    email: string;
    password: string;
    isVerified: boolean;
    isAdmin: boolean;
    flag: number;
    date: Date;
    questions: Array<{ questionId: string, isMarkedTrue: string }>; // Updated type to string
    forgotPasswordToken?: string;
    forgotPasswordTokenExpiry?: Date;
    verifyToken?: string;
    verifyTokenExpiry?: Date;
}

const QUESTION_IDS: string[] = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

const userSchema: Schema = new Schema<UserInterface>({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    // flag: {
    //     type: Number,
    //     default: 0,
    // },
    date: {
        type: Date,
        default: Date.now,
    },
    questions: {
        type: [{
            questionId: { type: String, enum: QUESTION_IDS },
            isMarkedTrue: { type: String, default: "" } // Change type to string
        }],
    }
    // forgotPasswordToken: String,
    // forgotPasswordTokenExpiry: Date,
    // verifyToken: String,
    // verifyTokenExpiry: Date,
});

userSchema.pre<UserInterface>("save", function(next) {
    this.questions = QUESTION_IDS.map(questionId => ({ questionId, isMarkedTrue: "" })); // Initialize with empty string
    next();
});

const User = mongoose.models.users || mongoose.model<UserInterface>("users", userSchema);

export default User;

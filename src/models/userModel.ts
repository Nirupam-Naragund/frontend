// import mongoose from "mongoose";
// import { type } from "os";
// import { string } from "prop-types";

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true, "Please provide a username"],
//         unique: true,
//     },
//     email: {
//         type: String,
//         required: [true, "Please provide a email"],
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: [true, "Please provide a password"],
//     },
//     isVerfied: {
//         type: Boolean,
//         default: false,
//     },
//     isAdmin: {
//         type: Boolean,
//         default: false,
//     },
//     flag: {
//         type: Number,
//         default: 0
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     },

//     q1: {
//         type: String,
//       },
//       q2: {
//         type: String,
//       },
//       q3: {
//         type: String,
//       },
//       q4: {
//         type: String,
//       },
//       q5: {
//         type: String,
//       },
//       q6: {
//         type: String,
//       },
//       q7: {
//         type: String,
//       },
//       q8: {
//         type: String,
//       },
//       q9: {
//         type: String,
//       },

//     forgotPasswordToken: String,
//     forgotPasswordTokenExpiry: Date,
//     verifyToken: String,
//     verifyTokenExpiry: Date,
// })

// const User = mongoose.models.users || mongoose.model("users", userSchema);

// export default User;



// import mongoose, { Schema, Document } from "mongoose";

// interface UserInterface extends Document {
//     username: string;
//     email: string;
//     password: string;
//     isVerified: boolean;
//     isAdmin: boolean;
//     flag: number;
//     date: Date;
//     questions: Array<{ questionId: string, isMarkedTrue: boolean }>;
//     forgotPasswordToken?: string;
//     forgotPasswordTokenExpiry?: Date;
//     verifyToken?: string;
//     verifyTokenExpiry?: Date;
// }

// const QUESTION_IDS: string[] = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];

// const userSchema: Schema = new Schema<UserInterface>({
//     username: {
//         type: String,
//         required: [true, "Please provide a username"],
//         unique: true,
//     },
//     email: {
//         type: String,
//         required: [true, "Please provide an email"],
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: [true, "Please provide a password"],
//     },
//     isVerified: {
//         type: Boolean,
//         default: false,
//     },
//     isAdmin: {
//         type: Boolean,
//         default: false,
//     },
//     flag: {
//         type: Number,
//         default: 0,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
//     questions: {
//         type: [{
//             questionId: { type: String, enum: QUESTION_IDS },
//             isMarkedTrue: { type: Boolean, default: false }
//         }],
//     },
//     forgotPasswordToken: String,
//     forgotPasswordTokenExpiry: Date,
//     verifyToken: String,
//     verifyTokenExpiry: Date,
// });

// userSchema.pre<UserInterface>("save", function(next) {
//     this.questions = QUESTION_IDS.map(questionId => ({ questionId, isMarkedTrue: false }));
//     next();
// });

// const User = mongoose.models.users || mongoose.model<UserInterface>("users", userSchema);


// export default User;


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

const QUESTION_IDS: string[] = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];

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
    flag: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    questions: {
        type: [{
            questionId: { type: String, enum: QUESTION_IDS },
            isMarkedTrue: { type: String, default: "" } // Change type to string
        }],
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

userSchema.pre<UserInterface>("save", function(next) {
    this.questions = QUESTION_IDS.map(questionId => ({ questionId, isMarkedTrue: "" })); // Initialize with empty string
    next();
});

const User = mongoose.models.users || mongoose.model<UserInterface>("users", userSchema);

export default User;

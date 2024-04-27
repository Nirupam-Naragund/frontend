import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect();

// export async function POST(request: NextRequest) {
//     try {
//         const reqBody = await request.json();
//         const { username, email, password } = reqBody;

//         console.log(reqBody);

//         if (!username || !email || !password) {
//             return NextResponse.json({ error: "All fields are required" })
//         }

//         if (!email.includes("@")) {
//             return NextResponse.json({ error: "Please enter a valid email" },{status:400})
//         }

//         // Check if user already exists
//         const user = await User.findOne({ email });

//         if (user) {
//             return NextResponse.json({ error: "User already exists" }, { status: 400 });
//         }

//         // Hash password
//         const salt = await bcryptjs.genSalt(10);
//         const hashedPassword = await bcryptjs.hash(password, salt);

//         const newUser = new User({
//             username,
//             email,
//             password: hashedPassword
//         });

//         const savedUser = await newUser.save();
//         console.log(savedUser);

//         // Send verification email
      

//         return NextResponse.json({
//             message: "User created successfully",
//             success: true,
//             savedUser
//         });

//     } catch (error: any) {
//         return NextResponse.json({ error: error.message }, { status: 500 });
//     }
// }

const QUESTION_IDS: string[] = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        console.log(reqBody);

        if (!username || !email || !password) {
            return NextResponse.json({ error: "All fields are required" })
        }

        if (!email.includes("@")) {
            return NextResponse.json({ error: "Please enter a valid email" },{status:400})
        }

        // Check if user already exists
        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            questions: QUESTION_IDS.map((questionId: string) => ({ questionId, isMarkedTrue: false }))
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        // Send verification email
      

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// import {connect} from "@/dbConfig/dbConfig";
// import User from "@/models/userModel";
// import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from "bcryptjs";
// import jwt from "jsonwebtoken";

// connect()

// export async function POST(request: NextRequest){
//     const reqBody = await request.json();
//     const { email, password } = reqBody

//     try {
//         //* Validation 
//         if (!email || !password) {
//             return NextResponse.json({ error: "All fields are required" })
//         }

//         //* Email Validation 
//         if (!email.includes("@")) {
//             return NextResponse.json({ error: "Please enter a valid email" },{status:400})
//         }

//         //* Find Unique User with email
//         const user = await User.findOne({ email });

//         console.log(user)

//         //* if user not exists with that email
//         if (!user) {
//           return  NextResponse.json({ error: "User Not Found" })
//         }

//         //* matching user password to hash password with bcrypt.compare()
//         const doMatch = await bcryptjs.compare(password, user.password)
//         console.log(doMatch)

//         //* if match password then generate token JWT_SECRET
//         if (doMatch) {
//             const token = jwt.sign({ userId: user.id }, 'codesprint' , {
//                 expiresIn: '7d'
//             })

//             NextResponse.json({ token },{status:201})
//         }
//         else {
//             NextResponse.json({error:"Email and Password not found"},{status:404})
//         }

//     } catch (error) {
//         console.log(error);
//         NextResponse.json({ error:"Internal Server Error"},{status:500})
//     }
// }

import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { email, password } = reqBody;

  try {
    //* Validation
    if (!email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    //* Email Validation
    if (!email.includes("@")) {
      return NextResponse.json({ error: "Please enter a valid email" }, { status: 400 });
    }

    //* Find Unique User with email
    const user = await User.findOne({ email });

    console.log(user);

    //* if user not exists with that email
    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    }

    //* matching user password to hash password with bcrypt.compare()
    const doMatch = await bcryptjs.compare(password, user.password);
    console.log(doMatch);

    //* if match password then generate token JWT_SECRET
    if (doMatch) {
      const token = jwt.sign({ userId: user.id }, "codesprint", {
        expiresIn: "7d",
      });

      return NextResponse.json({ token }, { status: 201 });
    } else {
      return NextResponse.json({ error: "Email and Password not found" }, { status: 404 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { useParams } from 'next/navigation'
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import bcryptjs from "bcryptjs";


connect();





export async function POST(request: NextRequest) {
    try {
        const { userId, uId, value } = await request.json();

        if (!userId || !uId || value === undefined) {
            return NextResponse.json(
                { error: "userId, uId, and value are required" },
                { status: 400 }
            );
        }

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Find the specified question with uId (_id) and update its isMarkedTrue value
        const updatedQuestions = user.questions.map((question: { _id: string, questionId: string, isMarkedTrue: string }) => {
            if (question._id.toString() === uId) {
                question.isMarkedTrue = value;
            }
            return question;
        });

        // Update the user document with the updated questions
        await User.findByIdAndUpdate(userId, { questions: updatedQuestions });

        return NextResponse.json({
            message: `Question ${uId} updated successfully`,
            success: true,
        });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}




  


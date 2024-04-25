import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect();

        export async function POST(request: NextRequest) {
            try {
                const reqBody: { userId: string, questionId: string } = await request.json();
                const { userId, questionId } = reqBody;
        
                if (!userId || !questionId) {
                    return NextResponse.json({ error: "Both userId and questionId are required" }, { status: 400 });
                }
        
                // Check if user exists
                const user = await User.findById(userId);
                if (!user) {
                    return NextResponse.json({ error: 'User not found' }, { status: 404 });
                }
        
                // Find the specified question for the user
                const foundQuestion = user.questions.find((q: { questionId: string }) => q.questionId === questionId);
                if (!foundQuestion) {
                    return NextResponse.json({ error: `Question ${questionId} not found for the user` }, { status: 404 });
                }
        
                // If the question is found, return its ID
                const { _id } = foundQuestion;
                return NextResponse.json({ questionId, _id });
        
            } catch (error: any) {
                return NextResponse.json({ error: error.message }, { status: 500 });
            }
        }
        

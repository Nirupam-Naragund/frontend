// Import necessary dependencies
import { connect } from "@/dbConfig/dbConfig"; // Import your database connection configuration
import User from "@/models/userModel"; // Import your User model
import { NextRequest, NextResponse } from "next/server"; // Import Next.js request and response types

// Establish database connection
connect();

// Define the POST request handler
export async function POST(request: NextRequest) {
    try {
        // Extract userId from request body
        const reqBody: { userId: string } = await request.json();
        const { userId } = reqBody;

        // Validate userId
        if (!userId) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }

        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Count the number of questions where isMarkedTrue is not blank
        const count = user.questions.filter((q: { isMarkedTrue: string }) => q.isMarkedTrue.trim() !== '').length;

        // Return the count
        return NextResponse.json({ count });

    } catch (error: any) {
        // Handle any errors
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
// import { NextRequest, NextResponse } from 'next/server';
// import User from '@/models/userModel';

// export async function GET(req: NextRequest, res: NextResponse) {
//     try {
//         const {userId} = req.userId as string;

//         console.log(userId);

//         const user = await User.findById(userId);

//         if (!user) {
//             return NextResponse.json({ error: 'User not found' }, { status: 404 })
//         }

//         let count = 0;

//         user.questions.forEach((question: any) => {
//             if (question.isMarkedTrue !== "") {
//                 count++;
//             }
//         });

//         console.log(count);

        
//     } catch (error) {
//         console.error('Error counting marked true questions:', error);
//         NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
//     }
// }

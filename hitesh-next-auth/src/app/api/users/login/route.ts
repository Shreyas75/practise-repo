import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from "bcryptjs"
connect();


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {email, password} = reqBody
        // Validation here
        console.log(reqBody);

        const user = await User.findOne({email})
        if(!user) {
            return NextResponse.json({error: "User does not exists"}, {status: 400});

        }

        console.log("user verification and exists.")
        const validPassword = await bcryptjs.compare(password, user.password)

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}
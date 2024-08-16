import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        // Validation here
        console.log(reqBody)

        // checking if user exists
        const user = await User.findOne({email})

        // if exists please return
        if(user) {
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }

        // If user does not exists, hash the password and continue
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)

        // creating a new User
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        })

        // saving the user to db
        const savedUser = await newUser.save()
        console.log(savedUser)

        //send verification email
        //this sends the verification emails
        const emailSent = await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})
        console.log("email sent", emailSent)

        return NextResponse.json({
            message: "User Registered Successfully!",
            success: true,
            savedUser
        })



    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}

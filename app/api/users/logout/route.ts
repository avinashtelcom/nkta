import {connectToDataBase} from "../../../../db/database";
import User from "../../../../db/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function GET() {
  try {
      const response = NextResponse.json(
          {
              message: "Logout successful",
              success: true,
          }
      )
      response.cookies.set("token", "",
      { httpOnly: true, expires: new Date(0)
      })

      return response;
      
  } catch (error : any) {
      return NextResponse.json({ error: error.message},
          {status: 500});
  }
  
}
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, password, role, school } = await req.json();

    if (!name || !email || !password || !role || !school) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ success: false, error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role, school });
    await user.save();

    // JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    const response = NextResponse.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, school: user.school }
    });

    response.cookies.set("token", token, { httpOnly: true, secure: false, path: "/" });
    return response;

  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
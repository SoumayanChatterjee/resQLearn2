import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(req) {
  try {
    await dbConnect();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ success: false, error: "User not found" }, { status: 404 });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    const response = NextResponse.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email, role: user.role, school: user.school }
    });

    response.cookies.set("token", token, { httpOnly: true, secure: false, path: "/" });
    return response;

  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
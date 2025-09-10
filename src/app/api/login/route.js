import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"; // ⚠ put in .env

export async function POST(req) {
  await dbConnect();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ success: false, message: "User not found" }, { status: 400 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 400 });
  }

  // ✅ Generate JWT
  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

  // ✅ Set HTTP-only cookie
  const res = NextResponse.json({
    success: true,
    message: "Login successful",
  });
  res.cookies.set("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
  });

  return res;
}
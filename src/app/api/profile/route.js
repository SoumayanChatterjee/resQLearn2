import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export async function GET(req) {
  await dbConnect();

  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, user });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Invalid token" }, { status: 401 });
  }
}
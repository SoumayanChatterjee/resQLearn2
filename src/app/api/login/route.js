// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import connectDB from "@/lib/mongodb";
// import User from "@/models/User";

// export async function POST(req) {
//   try {
//     await connectDB();

//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json(
//         { success: false, error: "Email and password are required" },
//         { status: 400 }
//       );
//     }

//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json(
//         { success: false, error: "User not found" },
//         { status: 404 }
//       );
//     }

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return NextResponse.json(
//         { success: false, error: "Invalid credentials" },
//         { status: 401 }
//       );
//     }

//     // ✅ Login success
//     return NextResponse.json({
//       success: true,
//       message: "Login successful",
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (err) {
//     console.error("Login error:", err);
//     return NextResponse.json(
//       { success: false, error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ✅ include school in response
    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        school: user.school,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

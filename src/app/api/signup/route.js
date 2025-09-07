import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    await dbConnect();

    const { name, email, password } = await req.json();

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({ success: false, error: "User already exists" }),
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return new Response(JSON.stringify({ success: true, user }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}

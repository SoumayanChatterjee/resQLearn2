// import { NextResponse } from "next/server";

// export async function POST() {
//   const res = NextResponse.json({ success: true, message: "Logged out" });

//   // ✅ clear cookie by setting expiry in past
//   res.cookies.set("session", "", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     expires: new Date(0), // immediately expire
//     path: "/",
//   });

//   return res;
// }

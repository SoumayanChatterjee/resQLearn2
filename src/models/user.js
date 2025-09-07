// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   password: { type: String, required: true },
// });

// export default mongoose.models.User || mongoose.model("User", UserSchema);
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  scores: {
    earthquake: { type: Number, default: 0 },
    cyclone: { type: Number, default: 0 },
    flood: { type: Number, default: 0 },
  },
  completedQuizzes: { type: [String], default: [] },
  joinDate: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);

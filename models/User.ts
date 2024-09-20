import mongoose, { Document, Model, Schema } from "mongoose";

export interface User extends Document {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: "member" | "admin";
}

const UserSchema: Schema<User> = new Schema<User>(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["member", "admin"],
      default: "member",
    },
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

const UserModel: Model<User> =
  mongoose.models.User || mongoose.model<User>("User", UserSchema);

export default UserModel;

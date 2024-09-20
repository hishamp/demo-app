"use server";

import connectDb from "@/lib/dbConnect";
import userModel, { User } from "@/models/User";
import { comparePassword, hashedPassword } from "./passwordUtils";
import { createJWT, verifyJWT } from "./tokenUtils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const getAuthUser = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    redirect("/login");
  }

  try {
    const decoded = verifyJWT(token);
    if (!decoded || typeof decoded === "string") {
      redirect("/login");
    }

    const user = await userModel.findById(decoded.userId);

    if (!user) {
      redirect("/login");
    }
    return user;
  } catch (error) {
    console.error("Token verification failed:", error);
    throw new Error("invalid token");
  }
};

const getAdminUser = async () => {
  const user = await getAuthUser();
  if (user.role !== "admin") {
    redirect("/");
  }
  return user;
};

export const loginAction = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    await connectDb();
    const rawData = Object.fromEntries(formData);
    console.log(rawData);

    const user = (await userModel.findOne({
      email: rawData.email,
    })) as User | null;

    const isValidUser =
      user &&
      (await comparePassword(rawData.password as string, user.password));

    if (!isValidUser) {
      throw new Error("invalid credentials");
    }
    console.log(user);
    const token = createJWT({ userId: user._id as string, role: user.role });
    const cookie = cookies();
    const oneDay = 1000 * 60 * 60 * 24;
    cookie.set("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === "production",
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/calculate");
};

export const registerAction = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    await connectDb();
    const isFirstAccount = (await userModel.countDocuments()) === 0;
    const role = isFirstAccount ? "admin" : "member";
    const rawData = Object.fromEntries(formData);
    rawData.password = await hashedPassword(rawData.password as string);
    console.log(rawData);
    await userModel.create({ ...rawData, role });
  } catch (error) {
    return renderError(error);
  }
  redirect("/login");
};

export const logout = async () => {
  const cookie = cookies();
  cookie.set("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  redirect("/login");
};

export const fetchRegisteredUsers = async (): Promise<User[]> => {
  await getAdminUser();
  const users = await userModel.find().sort({ createdAt: -1 });
  return users as User[];
};

export const fetchSingleUser = async (userId: string) => {
  await getAdminUser();
  const user = await userModel.findById(userId);
  if (!user) redirect("/users");
  return user;
};

export const updateUserRole = async (
  userId: string,
  newRole: "admin" | "member"
) => {
  await getAdminUser();
  if (!["admin", "member"].includes(newRole)) {
    throw new Error("invalid role selected");
  }

  const user = await userModel.findById(userId);

  if (!user) {
    throw new Error("user not found!");
  }

  user.role = newRole;
  await user.save();
  revalidatePath("/users")
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "an error occurred",
  };
};

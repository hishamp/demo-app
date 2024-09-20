import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: string;
  role: string;
}

export const createJWT = (payload: JwtPayload): string => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  const token = jwt.sign(payload, secret, {
    expiresIn: "24h",
  });

  return token;
};

export const verifyJWT = (token: string): JwtPayload | null => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;
    return decoded;
  } catch (error) {
    console.error("JWT verification error", error);
    return null;
  }
};

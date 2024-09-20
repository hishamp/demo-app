import mongoose from "mongoose";
declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-var
  var mongoose: any;
}

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

// import mongoose from "mongoose";

// const connectDB = async (): Promise<boolean> => {
//   if (mongoose.connections[0].readyState) {
//     return true;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI as string);
//     console.log("MongoDB connected");
//     return true;
//   } catch (error) {
//     console.error("MongoDB connection error: ", error);
//     throw new Error("Failed to connect to database");
//   }
// };

// export default connectDB;

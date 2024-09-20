import { z, ZodSchema } from "zod";

export const validateWithZodSchema = <T>(
  schema: ZodSchema<T>,
  data: unknown
): T => {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }

  return result.data;
};

export const RegistrationSchema = z.object({
  first_name: z.string().min(1, { message: "first name is required." }),
  last_name: z.string().min(1, { message: "first name is required." }),
  email: z.string().email({ message: "Invalid email." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 char length." }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email." }),
  password: z.string().min(1, { message: "Password cannot be empty" }),
});

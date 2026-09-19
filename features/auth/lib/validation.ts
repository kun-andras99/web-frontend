import { z } from "zod";

export const emailSchema = z
    .string()
    .trim()
    .toLowerCase()
    .email("Érvénytelen email cím.");

export const passwordSchema = z
    .string()
    .min(8, "A jelszónak legalább 8 karakter hosszúnak kell lennie.")
    .regex(/[a-z]/, "Legalább egy kisbetűt tartalmaznia kell.")
    .regex(/[A-Z]/, "Legalább egy nagybetűt tartalmaznia kell.")
    .regex(/[0-9]/, "Legalább egy számjegyet tartalmaznia kell.");

export const signInSchema = z.object({
    identifier: z
        .string()
        .trim()
        .min(1, "Add meg az email címed vagy felhasználóneved."),

    password: z.string().min(1, "Add meg a jelszavad."),
});

export const usernameSchema = z
    .string()
    .trim()
    .min(3, "A felhasználónév legalább 3 karakter legyen.")
    .max(32, "A felhasználónév legfeljebb 32 karakter lehet.")
    .regex(
        /^[a-zA-Z0-9._-]+$/,
        "Csak betű, szám, pont, aláhúzás és kötőjel használható.",
    );

export const signUpSchema = z
    .object({
        username: usernameSchema,
        email: emailSchema,
        password: passwordSchema,
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "A két jelszó nem egyezik.",
        path: ["confirmPassword"],
    });

export const forgotPasswordSchema = z.object({
    email: emailSchema,
});

export const resetPasswordSchema = z
    .object({
        password: passwordSchema,
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "A két jelszó nem egyezik.",
        path: ["confirmPassword"],
    });

export type SignInInput = z.infer<typeof signInSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;

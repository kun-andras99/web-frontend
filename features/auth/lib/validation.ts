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
    email: emailSchema,
    password: z.string().min(1, "A jelszó megadása kötelező."),
});

export const signUpSchema = z
    .object({
        username: z.string().trim().min(6, "A név legalább 2 karakter legyen."),
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

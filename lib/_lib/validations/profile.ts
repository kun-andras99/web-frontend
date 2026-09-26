import { z } from 'zod';

export const GENDERS = ['MAN', 'WOMAN'] as const;
export type Gender = (typeof GENDERS)[number];

export const SEXUALITIES = [
  'STRAIGHT',
  'GAY',
  'LESBIAN',
  'BISEXUAL',
  'PANSEXUAL',
  'ASEXUAL',
  'DEMISEXUAL',
  'QUEER',
  'OMNISEXUAL',
  'QUESTIONING',
  'OTHER',
  'PREFER_NOT_TO_SAY',
] as const;
export type SexualityValue = (typeof SEXUALITIES)[number];

const MIN_AGE = 18;

export function calculateAge(birth: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

/**
 * Ha férfi, LESBIAN nem választható; ha nő, GAY nem választható.
 * Ugyanezt a szabályt kliens oldalon (opciók szűrése) és itt,
 * a szerveroldali validációban is érvényesítjük.
 */
export function isSexualityAllowedForGender(gender: Gender, sexuality: SexualityValue) {
  if (gender === 'MAN' && sexuality === 'LESBIAN') return false;
  if (gender === 'WOMAN' && sexuality === 'GAY') return false;
  return true;
}

export const basicInfoSchema = z.object({
  nickname: z
    .string()
    .trim()
    .min(3, 'A megjelenített név legalább 3 karakter legyen')
    .max(8, 'A megjelenített név legfeljebb 8 karakter lehet'),
  birth: z
    .string()
    .refine((val) => !Number.isNaN(Date.parse(val)), { message: 'Érvénytelen dátum' })
    .refine((val) => calculateAge(new Date(val)) >= MIN_AGE, {
      message: `Legalább ${MIN_AGE} évesnek kell lenned`,
    }),
  avatarUrl: z.string().url('Tölts fel egy profilképet'),
});

export const genderSexualitySchema = z.object({
  gender: z.enum(GENDERS),
  sexuality: z.enum(SEXUALITIES),
});

export const createProfileSchema = basicInfoSchema.merge(genderSexualitySchema).superRefine((data, ctx) => {
  if (!isSexualityAllowedForGender(data.gender, data.sexuality)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['sexuality'],
      message: 'Ez a szexualitás nem választható ehhez a nemhez',
    });
  }
});

export type CreateProfileInput = z.infer<typeof createProfileSchema>;

import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: "Ime nije dovoljno dugo."}),
    username: z.string().min(2, {message: "Korisničko ime nije dovoljno dugo."}),
    email: z.string()
    .email({ message: "Neispravna email adresa." })
    .refine((val) => val.endsWith("@podravka.hr"), {
        message: "Email adresa ima krivu domenu. (hint: ♥️)"
    }),
    password:z.string().min(8, {message: "Lozinka mora imati barem 8 znakova."})
  })
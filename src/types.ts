import { z } from 'zod'

export const UserRegisterSchema = z.object({
    firstName: z.string({ required_error: "First Name is required" }).min(1, { message: "Must be at least 1 characters long" }),
    middleName: z.string().min(1, { message: "Must be at least 1 characters logn" }).optional().or(z.literal("")),
    lastName: z.string({ required_error: "Last Name is required" }).min(1, { message: "Must be at least 1 characters long" }),
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
    movies: z.object({
        label: z.string().optional(),
        year: z.number().optional()
    }).optional().transform((val, ctx) => {
        console.log(`test ${JSON.stringify(val)}`)
        if (!val || !val.label) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Select a movie",
            })
        }
        return val
    })
})

const ActionSchema = z.object({
    updateFirstName: z.function().args(UserRegisterSchema.pick({ firstName: true })).returns(z.void())
})

export type UserRegisterFromData = z.infer<typeof UserRegisterSchema>
export type Action = z.infer<typeof ActionSchema>
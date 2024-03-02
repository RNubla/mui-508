import { z } from 'zod'

export const UserRegisterSchema = z.object({
    firstName: z.string({ required_error: "First Name is required" }).min(1, { message: "Must be at least 1 characters long" }),
    lastName: z.string({ required_error: "Last Name is required" }).min(1, { message: "Must be at least 1 characters long" }),
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" })
})

const ActionSchema = z.object({
    updateFirstName: z.function().args(UserRegisterSchema.pick({ firstName: true })).returns(z.void())
})

export type UserRegisterFromData = z.infer<typeof UserRegisterSchema>
export type Action = z.infer<typeof ActionSchema>
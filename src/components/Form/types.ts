import { z } from 'zod'
import { Control } from "react-hook-form";
import { TextFieldProps } from '@mui/material';

const InputFieldSchema = z.object({
    name: z.string(),
    label: z.string(),
    errors: z.string().nullish(),
    helperText: z.string()
})
type InputField = z.infer<typeof InputFieldSchema>

interface InputFieldProps extends TextFieldProps {
    control: Control,
    name: InputField['name'];
    label: InputField['label'];
    errors: InputField['errors'];
    helperText: InputField['helperText'];
}

export type {
    InputFieldProps
}
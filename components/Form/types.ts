import { z } from 'zod'
import { Control } from "react-hook-form";
import { AutocompleteProps, TextFieldProps } from '@mui/material';

interface ControllerBase {
    control: Control,
    name: string
}

const InputFieldSchema = z.object({
    label: z.string(),
    errors: z.string().nullish(),
    helperText: z.string()
})
type InputField = z.infer<typeof InputFieldSchema>

interface InputFieldProps extends ControllerBase, TextFieldProps {
    label: InputField['label'];
    errors: InputField['errors'];
    helperText: InputField['helperText'];
}
// Define a generic type alias for the array schema
type ArraySchema<T> = z.ZodType<T[], unknown>;

const SelectFieldSchema = z.object({
    label: z.string()
})
type SelectField = z.infer<typeof SelectFieldSchema>

const KeyValuePairSchema = z.object({
    key: z.string(),
    value: z.unknown()
})

type KeyValuePair<K extends string, V> = z.infer<typeof KeyValuePairSchema>

interface SelectFieldProps extends SelectField, ControllerBase {
    options: KeyValuePair<string, unknown>[]
}



export type {
    InputFieldProps,
    SelectFieldProps, ArraySchema
};
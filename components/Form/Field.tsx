import { TextField, TextFieldProps } from "@mui/material";
import {
	type Control,
	Controller,
	type UseControllerProps,
} from "react-hook-form";

interface InputFieldProps extends UseControllerProps {
	control: Control;
	id: string;
	name: string;
	helperText?: string;
	label: string;
}
export const InputField: React.FC<InputFieldProps> = ({
	control,
	name,
	label,
	helperText,
	rules,
	id,
}) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field, fieldState: { error } }) => {
				const isRequired = rules?.required ? true : false;
				const isError = isRequired && error?.message ? true : false;
				return (
					<TextField
						inputRef={field.ref}
						helperText={isRequired ? error?.message : helperText}
						size="small"
						error={isError}
						onChange={field.onChange}
						value={field.value}
						fullWidth
						label={label}
						variant="outlined"
					/>
				);
			}}
		/>
	);
};

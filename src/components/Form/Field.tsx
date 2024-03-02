import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({
	control,
	name,
	label,
	errors,
	helperText,
}) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={{ required: "First Name is required" }}
			render={({ field }) => (
				<TextField
					inputRef={field.ref}
					helperText={errors ? errors : helperText}
					size="small"
					error={!!errors}
					onChange={field.onChange}
					value={field.value}
					fullWidth
					label={label}
					variant="outlined"
				/>
			)}
		/>
	);
};

import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { SelectFieldProps } from "./types";

export const Select: React.FC<SelectFieldProps> = ({
	control,
	name,
	label,
	rules,
	helperText,
	optionsKey,
	options,
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
					<Autocomplete
						size="small"
						ref={field.ref}
						options={options}
						getOptionLabel={(option) => (option.label ? option.label : "")}
						isOptionEqualToValue={(option, val) => option.value === val.value}
						// onChange={field.onChange}
						onChange={(_, value) => {
							console.log(`value ${JSON.stringify(value, null, 1)}`);
							field.onChange(value);
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								label={label}
								error={isError}
								helperText={isRequired ? error?.message : helperText}
							/>
						)}
					/>
				);
			}}
		/>
	);
};

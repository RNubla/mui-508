import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { SelectFieldProps } from "./types";

export const Select: React.FC<SelectFieldProps> = ({
	control,
	name,
	label,
	options,
	errors,
	optionsKey,
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<Autocomplete
					ref={field.ref}
					onChange={(_event, item) => field.onChange(item)}
					value={field.value}
					options={options}
					// getOptionLabel={(option) => option[optionsKey]}
					getOptionLabel={(item) => (item[optionsKey] ? item[optionsKey] : "")}
					isOptionEqualToValue={(option, value) => {
						return (
							value === undefined ||
							value === "" ||
							option[optionsKey] === value[optionsKey]
						);
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							label={label}
							helperText={errors}
							error={!!errors}
						/>
					)}
				/>
			)}
		/>
	);
};

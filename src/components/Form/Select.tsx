import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { SelectFieldProps } from "./types";

export const Select: React.FC<SelectFieldProps> = ({
	control,
	name,
	label,
	options,
}) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				return (
					<Autocomplete
						size="small"
						ref={field.ref}
						options={options}
						renderInput={(params) => <TextField {...params} label={label} />}
					/>
				);
			}}
		/>
	);
};

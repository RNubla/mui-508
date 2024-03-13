import { ErrorMessage, Label, TextInput } from "@trussworks/react-uswds";
import {
	type Control,
	Controller,
	type UseControllerProps,
} from "react-hook-form";

interface InputFieldProps extends UseControllerProps {
	control: Control;
	id: string;
	name: string;
	helperText: string;
}

export const InputField: React.FC<InputFieldProps> = ({
	control,
	id,
	rules,
	name,
	helperText,
}) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field, fieldState: { error } }) => (
				<>
					<Label htmlFor={id}>Last or family name</Label>
					{error && (
						<ErrorMessage id={`${id}-error-message`}>
							{error.message}
						</ErrorMessage>
					)}
					<TextInput
						id={id}
						name={name}
						type="text"
						inputRef={field.ref}
						onChange={field.onChange}
						validationStatus={error ? "error" : undefined}
						value={field.value}
					/>
					<span className="usa-hint">{helperText}</span>
				</>
			)}
		/>
	);
};

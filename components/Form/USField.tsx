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
	helperText?: string;
	label: string;
}

export const InputField: React.FC<InputFieldProps> = ({
	control,
	id,
	rules,
	name,
	helperText,
	label,
}) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field, fieldState: { error } }) => {
				const isRequired = rules?.required;
				return (
					<>
						<Label
							htmlFor={id}
							requiredMarker={isRequired ? true : undefined}
							aria-required={isRequired ? true : false}
							hint={isRequired === undefined ? " (optional)" : null}
						>
							{label}
						</Label>
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
							required={isRequired ? true : false}
						/>
						{helperText && <span className="usa-hint">{helperText}</span>}
					</>
				);
			}}
		/>
	);
};

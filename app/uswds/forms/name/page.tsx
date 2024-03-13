"use client";
import {
	Button,
	ErrorMessage,
	Fieldset,
	Form,
	Label,
	TextInput,
} from "@trussworks/react-uswds";
import React from "react";
import { Controller, useForm } from "react-hook-form";

export default function NameForm() {
	const {
		handleSubmit,
		control,
		watch,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: "",
			middleName: "",
			lastName: "",
			// fullName: "",
			// preferedName: "",
		},
		mode: "onChange",
	});

	const onSubmit = (data) => {
		console.log(`data ${JSON.stringify(data, null, 2)}`);
	};
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Fieldset legend="Name" legendStyle="large">
				<Controller
					name="firstName"
					control={control}
					rules={{
						required: "First name is required",
					}}
					render={({ field, fieldState: { error } }) => (
						<>
							<Label htmlFor="first-name">First or given name</Label>
							{error && (
								<ErrorMessage id="input-error-message">
									{error.message}
								</ErrorMessage>
							)}
							<TextInput
								id="first-name"
								name="first-name"
								type="text"
								onChange={field.onChange}
								validationStatus={error ? "error" : undefined}
								value={field.value}
								inputRef={field.ref}
							/>
							<span className="usa-hint">
								For example, Jose, Darren, or Mai
							</span>
						</>
					)}
				/>
				<Controller
					name="middleName"
					control={control}
					render={({ field }) => (
						<>
							<Label htmlFor="middle-name">Middle name</Label>
							<TextInput
								id="middle-name"
								name="middle-name"
								type="text"
								inputRef={field.ref}
								onChange={field.onChange}
								value={field.value}
							/>
						</>
					)}
				/>
				<Controller
					name="lastName"
					control={control}
					rules={{ required: "Last name is required" }}
					render={({ field, fieldState: { error } }) => (
						<>
							<Label htmlFor="last-name">Last or family name</Label>
							{error && (
								<ErrorMessage id="input-error-message">
									{error.message}
								</ErrorMessage>
							)}
							<TextInput
								id="last-name"
								name="last-name"
								type="text"
								inputRef={field.ref}
								onChange={field.onChange}
								validationStatus={error ? "error" : undefined}
								value={field.value}
							/>
							<span className="usa-hint">
								For example, Martinez Gonzalez, Gu, or Smith
							</span>
						</>
					)}
				/>
			</Fieldset>
			<Button type="button" onClick={() => reset()}>
				Reset
			</Button>
			<Button type="submit">Submit</Button>
			{/* <Fieldset legend="Full name" legendStyle="large">
				<Label htmlFor="full-name">Full name</Label>
				<span className="usa-hint">
					For example, Prof. Madeline Martinez Hernandez
				</span>
				<TextInput id="full-name" name="full-name" type="text" />
			</Fieldset>
			<Fieldset legend="Preferred name" legendStyle="large">
				<Label htmlFor="preferred-name">I prefer to be addressed as</Label>
				<span className="usa-hint">
					For example, Dr. Gu, Mrs. Schmidt, Alix Martinez
				</span>
				<TextInput id="preferred-name" name="preferred-name" type="text" />
			</Fieldset> */}
		</Form>
	);
}

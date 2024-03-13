"use client";
import { FormField } from "@/components/Form";
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
				<FormField.InputField
					control={control}
					id="firstName"
					name="firstName"
					rules={{ required: "First Name is required" }}
					helperText="For example, John, Sam, or Bob"
				/>
				<FormField.InputField
					control={control}
					name="middleName"
					id="middleName"
				/>
				<FormField.InputField
					control={control}
					name="lastName"
					id="lastName"
					rules={{ required: "Last name is required" }}
					helperText="For example, Martinez, Gu, or Smith"
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

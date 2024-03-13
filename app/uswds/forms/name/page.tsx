"use client";
import { FormField } from "@/components/Form";
import {
	Button,
	ErrorMessage,
	Fieldset,
	Form,
	Label,
	RequiredMarker,
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
			<Fieldset legend="Name Info" legendStyle="large">
				<p>
					Required fields are marked with an asterisk (<RequiredMarker />
					).
				</p>
				<FormField.InputField
					control={control}
					id="firstName"
					name="firstName"
					rules={{ required: "First Name is required" }}
					label="First Name"
					helperText="For example, John, Sam, or Bob"
				/>
				<FormField.InputField
					control={control}
					name="middleName"
					id="middleName"
					label="Middle Name"
				/>
				<FormField.InputField
					control={control}
					name="lastName"
					id="lastName"
					label="Last Name"
					rules={{ required: "Last name is required" }}
					helperText="For example, Martinez, Gu, or Smith"
				/>
			</Fieldset>
			<Button type="button" onClick={() => reset()} secondary>
				Reset
			</Button>
			<Button type="submit">Submit</Button>
		</Form>
	);
}

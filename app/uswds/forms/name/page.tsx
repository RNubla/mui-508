"use client";
import { Fieldset, Form, Label, TextInput } from "@trussworks/react-uswds";
import React from "react";
import { useForm } from "react-hook-form";

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
			fullName: "",
			preferedName: "",
		},
		mode: "onChange",
	});

	const onSubmit = (data) => {
		console.log(`data ${data}`);
	};
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Fieldset legend="Name" legendStyle="large">
				<Label htmlFor="first-name">First or given name</Label>
				<span className="usa-hint">For example, Jose, Darren, or Mai</span>
				<TextInput id="first-name" name="first-name" type="text" />
				<Label htmlFor="middle-name">Middle name</Label>
				<TextInput id="middle-name" name="middle-name" type="text" />
				<Label htmlFor="last-name">Last or family name</Label>
				<span className="usa-hint">
					For example, Martinez Gonzalez, Gu, or Smith
				</span>
				<TextInput id="last-name" name="last-name" type="text" />
			</Fieldset>
			<Fieldset legend="Full name" legendStyle="large">
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
			</Fieldset>
		</Form>
	);
}

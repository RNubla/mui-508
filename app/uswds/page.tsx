"use client";
import React from "react";
import {
	Alert,
	Button,
	ErrorMessage,
	Fieldset,
	Form,
	FormGroup,
	Label,
	TextInput,
} from "@trussworks/react-uswds";
export default function USWDS() {
	const testText = (
		<>
			Lorem ipsum dolor sit amet, <a href="#test">consectetur adipiscing</a>{" "}
			elit, sed do eiusmod.
		</>
	);
	const mockSubmit = (): void => {
		/* mock submit fn */
	};
	return (
		<div>
			<Alert type="error" heading="Success status" headingLevel="h4">
				{testText}
			</Alert>
			<Button type="button" accentStyle="cool">
				Click Me
			</Button>
			<Label htmlFor="input-type-text">Text input label</Label>
			<TextInput id="input-type-text" name="input-type-text" type="text" />
			<FormGroup error>
				<Label htmlFor="input-error" error>
					Text input error
				</Label>
				<ErrorMessage id="input-error-message">
					Helpful error message
				</ErrorMessage>
				<TextInput
					id="input-error"
					name="input-error"
					type="text"
					validationStatus="error"
					aria-describedby="input-error-message"
				/>
			</FormGroup>
		</div>
	);
}

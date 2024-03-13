"use client";
import React from "react";
import { Alert, Button } from "@trussworks/react-uswds";
export default function USWDS() {
	const testText = (
		<>
			Lorem ipsum dolor sit amet, <a href="#test">consectetur adipiscing</a>{" "}
			elit, sed do eiusmod.
		</>
	);
	return (
		<div>
			<Alert type="error" heading="Success status" headingLevel="h4">
				{testText}
			</Alert>
			<Button type="button" accentStyle="cool">
				Click Me
			</Button>
		</div>
	);
}

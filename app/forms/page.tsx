"use client";
import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { UserRegisterFromData, UserRegisterSchema } from "@/components/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/components/Form";
import { z } from "zod";
import { ArraySchema } from "@/components/Form/types";

// Define the schema for a movie object
const MovieSchema = z.object({
	label: z.string(),
	year: z.number(),
});

const MoviesArraySchema: ArraySchema<typeof MovieSchema> = z.array(MovieSchema);
export default function FormPage() {
	const {
		handleSubmit,
		control,
		watch,
		reset,
		formState: { errors },
	} = useForm<UserRegisterFromData>({
		resolver: zodResolver(UserRegisterSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			movies: "",
		},
		mode: "onChange",
	});

	const onSubmit = (data: UserRegisterFromData) => {
		console.log(data);
	};
	const movies = [
		{ id: 0, label: "The Shawshank Redemption", year: 1994 },
		{ id: 1, label: "The Godfather", year: 1972 },
	];
	return (
		<form onSubmit={handleSubmit((formData) => onSubmit(formData))}>
			<FormField.MuiField
				rules={{ required: true }}
				helperText="Enter First Name"
				control={control}
				name="firstName"
				label="First Name"
			/>
			<FormField.MuiField
				helperText="Enter Last Name"
				name="middleName"
				label="Middle Name"
				control={control}
			/>
			<FormField.MuiField
				helperText="Enter Last Name"
				name="lastName"
				label="Last Name"
				rules={{ required: true }}
				control={control}
			/>
			<FormField.MuiField
				helperText="Enter Email"
				name="email"
				label="Email"
				rules={{ required: true }}
				control={control}
			/>

			<FormField.Select
				schema={MoviesArraySchema}
				control={control}
				name="movies"
				label="Select a value"
				options={movies}
				rules={{ required: true }}
			/>

			<Button variant="contained" onClick={() => reset()}>
				Reset
			</Button>
			<Button variant="contained" type="submit">
				Submit
			</Button>
		</form>
	);
}

import { Button, TextField } from "@mui/material";
// import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { UserRegisterFromData, UserRegisterSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./components/Form";
import { z } from "zod";
import { ArraySchema } from "./components/Form/types";

// Define the schema for a movie object
const MovieSchema = z.object({
	label: z.string(),
	year: z.number(),
});

const MoviesArraySchema: ArraySchema<typeof MovieSchema> = z.array(MovieSchema);

function App() {
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
		{ label: "The Shawshank Redemption", year: 1994 },
		{ label: "The Godfather", year: 1972 },
	];
	return (
		<form onSubmit={handleSubmit((formData) => onSubmit(formData))}>
			<Form.InputField
				helperText="Enter First Name"
				control={control}
				name="firstName"
				label="First Name"
				errors={errors.firstName?.message}
			/>
			<Form.InputField
				helperText="Enter Last Name"
				name="lastName"
				label="Last Name"
				errors={errors.lastName?.message}
				control={control}
			/>
			<Form.InputField
				helperText="Enter Email"
				name="email"
				label="Email"
				errors={errors.email?.message}
				control={control}
			/>

			<Form.Select
				schema={MoviesArraySchema}
				control={control}
				name="movies"
				label="Select a value"
				options={movies}
				errors={errors.movies?.message}
				optionsKey="label"
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

export default App;

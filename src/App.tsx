import { Button } from "@mui/material";
// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UserRegisterFromData, UserRegisterSchema } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./components/Form";
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
		},
		mode: "onChange",
	});

	const onSubmit = (data: UserRegisterFromData) => {
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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

			{/* <Form.Select /> */}

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

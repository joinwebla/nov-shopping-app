import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { registerUserAPI } from "../api";
import { toast } from "react-toastify";

const schema = yup.object({
	name: yup.string().min(3, 'Too small!').max(20, "Too long!").required('Required'),
	email: yup.string().email().max(150, "Too Long!").required('Required'),
	password: yup.string().required('Required'),
	confirmPassword: yup.string().required('Required')
})

export const Signup = (props) => {
	console.log(props, "signup props");

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	const myOwnFunc = async (finalData) => {
		if (finalData.password !== finalData.confirmPassword) {
			alert("Password Not matching")
			return;
		}

		try {
			const response = await registerUserAPI(finalData);
			if (response.status == 200) {
				toast.success("Your registration is successfull, Please login!");
				setTimeout(() => {
					window.location.href = "/login"
				}, 2000)
			}
		} catch (error) {
			if (error && error.response && error.response.data.message) {
				toast.error(error.response.data.message)
			}
		}
	}

	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
			<div style={{ width: 500, padding: 30 }}>
				<h1>Signup Page</h1>

				<form onSubmit={handleSubmit(myOwnFunc)}>

					<div class="form-group" style={{ marginBottom: 10 }}>
						<label>Your Name</label>
						<input {...register("name")} type="text" class="form-control" placeholder="Enter Name" />
						<small id="emailHelp" class="form-text text-danger">{errors["name"]?.message}</small>
					</div>

					<div class="form-group" style={{ marginBottom: 10 }}>
						<label>Email address</label>
						<input {...register("email")} type="email" class="form-control" placeholder="Enter email" />
						<small id="emailHelp" class="form-text text-danger">{errors["email"]?.message}</small>
					</div>

					<div class="form-group" style={{ marginBottom: 10 }}>
						<label>Password</label>
						<input {...register("password")} type="password" class="form-control" placeholder="Password" />
						<small id="emailHelp" class="form-text text-danger">{errors["password"]?.message}</small>
					</div>

					<div class="form-group" style={{ marginBottom: 10 }}>
						<label>Confirm Password</label>
						<input {...register("confirmPassword")} type="password" class="form-control" placeholder="Password" />
						<small id="emailHelp" class="form-text text-danger">{errors["confirmPassword"]?.message}</small>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>

				<p>If you already have an account? <a href="/login">Login here</a></p>
			</div>
		</div>
	)
}

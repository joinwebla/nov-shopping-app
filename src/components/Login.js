import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from "react-toastify";
import { loginUserApi } from "../api";

const schema = yup.object({
	email: yup.string().email().max(150, "Too Long!").required('Required'),
	password: yup.string().required('Required'),
})


export const Login = (props) => {
	console.log(props, "login props");

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	const myOwnFunc = async (finalData) => {
		try {
			const response = await loginUserApi(finalData);
			if (response.status == 200) {
				const token = response.data.token;
				localStorage.setItem("ECOM_TOKEN", token);
				localStorage.setItem("ECOM_CART_ID", response.data.cart_id);

				toast.success("You've logged in successfully!")
				setTimeout(() => {
					window.location.href = "/productfeed"
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
				<h1>Login Page</h1>
				<form onSubmit={handleSubmit(myOwnFunc)}>
					<div className="form-group" style={{ marginBottom: 10 }}>
						<label>Email address</label>
						<input type="email" {...register("email")} className="form-control" placeholder="Enter email" />
						<small id="emailHelp" class="form-text text-danger">{errors["email"]?.message}</small>
					</div>

					<div className="form-group" style={{ marginBottom: 10 }}>
						<label>Password</label>
						<input type="password" {...register("password")} className="form-control" placeholder="Password" />
						<small id="emailHelp" class="form-text text-danger">{errors["password"]?.message}</small>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>

				<p>If don't have an account? <a href="/signup">Signup here</a></p>
			</div>
		</div>
	)
}

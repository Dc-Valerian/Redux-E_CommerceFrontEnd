import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import React from 'react'
import styled from 'styled-components';
import { CreateNewUser } from '../API/Api';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { UserLogin } from '../Global/ReduxState';
import { useAppDispatch } from '../Global/Store';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

	const navigate = useNavigate();
	 
	const dispatch = useAppDispatch();

	const queryClient = useQueryClient();

	// Setting up the schemas for our form using yup validator
	const Schema = yup.object({
		name: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().min(8).required(),
		confirmPassword: yup.string().oneOf([yup.ref("password")]).required("Password do not match"),
	})

	type formData = yup.InferType<typeof Schema>

	const {handleSubmit, reset, formState: {errors }, register} = useForm<formData>({resolver: yupResolver(Schema)})

	// Query function to be able to create new users
	const RegisterUsers = useMutation({
		mutationKey: ["NewUsers"],
		mutationFn: CreateNewUser,
		onSuccess: (data) =>{
			dispatch(UserLogin(data.data))
			queryClient.invalidateQueries(["NewUsers"])
		}
	});

	const NewUsers = handleSubmit((data) =>{
		RegisterUsers.mutate(data)
		reset();
		navigate("/")
		Swal.fire({
			icon: "success",
			title: "Registered Successfully",
			// text: RegisterUsers!.data!.message,
			timer: 3000,
		})
	})
	
	

	return (
		<Container>
			<Card onSubmit={NewUsers}>
				<h3>Register</h3>

				<Input  props={errors?.name ? "outline" : ""}
				{...register("name")}
				placeholder='Enter your name' />
				<p>{errors?.name && errors?.name?.message}</p>

				<Input props={errors?.email ? "outline" : ""}
				{...register("email")}
				placeholder='Enter your email' />
				<p>{errors?.email && errors?.email?.message}</p>

				<Input props={errors?.password ? "outline" : ""}
				{...register("password")}
				placeholder='Enter your password' type="password" />
				<p>{errors?.password && errors?.password?.message}</p>

				<Input props={errors?.confirmPassword ? "outline" : ""}
				{...register("confirmPassword")}
				placeholder='Confirm your password' type="password" />
				<p>{errors.confirmPassword && errors.confirmPassword.message}</p>

				<MainButton type='submit'>Register</MainButton>
			</Card>
		</Container>
	);

}

export default SignUp;

const MainButton = styled.button`
	height: 45px;
	width: 250px;
	background-color: #123456;
	color: white;
	font-size: 17px;
	font-weight: 700;
	border: none;
	outline: none;
	border-radius: 30px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	cursor: pointer;
	margin-top: 20px;
`;

const Card = styled.form`
	padding: 20px;
	min-height: 300px;
	width: 400px;
	border: 1px solid #f1f1f1;
	p {
		font-size: 11px;
		margin-bottom: 5px;
		padding: 0;
		color: red;
		/* min-height: 10px; */
	}
`;
const Input = styled.input<{props: string}>`
	height: 35px;
	width: 95%;
	border: 1px solid #f1f1f1;
	outline: ${({props}) => props ? "1px solid red" : "none"} ;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
`;

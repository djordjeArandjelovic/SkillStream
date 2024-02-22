import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FormRow, Logo } from "../components";
import { toast } from "react-toastify";

const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};

const Register = () => {
	const [values, setValues] = useState(initialState);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(`${name}: ${value}`);
		setValues({ ...values, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, password, isMember } = values;
		if (!email || !password || (!isMember && !name)) {
			toast.error("Please fill out all fields");
		}
	};
	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	return (
		<Wrapper className="full-page">
			<form className="form" onSubmit={handleSubmit}>
				<Logo />
				<h3>{values.isMember ? "Login" : "Register"}</h3>
				{/* name */}
				{!values.isMember && (
					<FormRow
						type={"text"}
						name={"name"}
						value={values.name}
						handleChange={handleChange}
					/>
				)}

				{/* email */}
				<FormRow
					type={"email"}
					name={"email"}
					value={values.email}
					handleChange={handleChange}
				/>

				{/* password */}
				<FormRow
					type={"password"}
					name={"password"}
					value={values.password}
					handleChange={handleChange}
				/>
				<button type="submit" className="btn btn-block">
					submit
				</button>

				<p>
					{values.isMember ? "Not a member?" : "Already registered?"}
					<button type="button" onClick={toggleMember} className="member-btn">
						{values.isMember ? "Register" : "Login"}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: grid;
	align-items: center;
	.logo {
		display: block;
		margin: 0 auto;
		margin-bottom: 1.38rem;
	}
	.form {
		max-width: 400px;
		border-top: 5px solid var(--primary-500);
	}

	h3 {
		text-align: center;
	}
	p {
		margin: 0;
		margin-top: 1rem;
		text-align: center;
	}
	.btn {
		margin-top: 1rem;
	}
	.member-btn {
		background: transparent;
		border: transparent;
		color: var(--primary-500);
		cursor: pointer;
		letter-spacing: var(--letterSpacing);
	}
`;

export default Register;

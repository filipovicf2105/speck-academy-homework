import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { AuthContext } from '../../../context/AuthContext';
import { loginUser } from '../../../api/login';
import {
    Form,
    FormAdditionalLink,
    FormGeneralError,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormButton
} from '../FormStyles';

const LoginForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [error, setError] = useState(false);
    const { setIsLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    const onSubmit = async (data) => {
        try {
            const result = await loginUser(data);
            if (result.token) {
                localStorage.setItem('token', `Bearer ${result.token}`);
                setIsLoggedIn(true);
                history.push('/');
            } else {
                setError(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const loginForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <FormAdditionalLink to="/register">You don't have an account? Click here to register!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    id="username"
                    name="username"
                    ref={register({ required: true })}
                    type="text" />
                {errors.username && <FormInputValidation>Username is required</FormInputValidation>}
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    id="password"
                    name="password"
                    ref={register({ required: true })}
                    type="password" />
                {errors.password && <FormInputValidation>Password is required</FormInputValidation>}
            </FormRow>
            <FormButtonRow>
                <FormButton>Login</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {loginForm}
            {error && <FormGeneralError>Username or password are incorrect!</FormGeneralError>}
        </>
    );
}

export default LoginForm;

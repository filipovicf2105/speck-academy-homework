import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { registerUser } from '../../../api/register';
import {
    Form,
    FormAdditionalLink,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormButton
} from '../FormStyles';

const RegisterForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [error, setError] = useState(false);
    const history = useHistory();

    const onSubmit = async (data) => {
        registerUser(data).then((res) => {
            if (res.message) {
                setError(true);
            } else {
                history.push('/login');
            }
        });
    }

    const registerForm =
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <FormAdditionalLink to="/login">Already registered? Click here to login!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    id="username"
                    name="username"
                    ref={register({ required: true, minLength: 5 })}
                    type="text" />
                {errors.username && errors.username.type === "required" && (
                    <FormInputValidation>Username is required</FormInputValidation>
                )}
                {errors.username && errors.username.type === "minLength" && (
                    <FormInputValidation>Username should be at least 5 characters long</FormInputValidation>
                )}
                {!errors.username && error && (
                    <FormInputValidation>Username already exists</FormInputValidation>
                )}
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    id="password"
                    name="password"
                    ref={register({ required: true, minLength: 8 })}
                    type="password" />
                {errors.password && errors.password.type === "required" && (
                    <FormInputValidation>Password is required</FormInputValidation>
                )}
                {errors.password && errors.password.type === "minLength" && (
                    <FormInputValidation>Password should be at least 8 characters long</FormInputValidation>
                )}
            </FormRow>
            <FormButtonRow>
                <FormButton>Register</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {registerForm}
        </>
    );
}

export default RegisterForm;

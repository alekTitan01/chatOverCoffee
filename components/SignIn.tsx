"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import Buttons from "./Buttons";
import Inputs from "./forms/Inputs";

function SignIn() {
    const form = useForm<FieldValues>();

    const { register, control, handleSubmit, formState } = form;

    const { errors } = formState;

    const onSignIn = (data: FieldValues) => {
        console.log("data", data);
    };

    return (
        <div className="flex-start flex-col py-2 px-4">
            <h1 className="text-2xl text-primary font-bold mb-5">Login</h1>
            <form
                onSubmit={handleSubmit(onSignIn)}
                noValidate
                className="flex-center flex-col gap-4"
            >
                <Inputs
                    inputClass="input-register"
                    labelClass="input-label"
                    name="email"
                    label="Email"
                    type="email"
                    register={register}
                    registerOptions={{
                        required: "Email is required",
                    }}
                    errors={errors}
                />
                <Inputs
                    inputClass="input-register"
                    labelClass="input-label"
                    name="password"
                    label="Password"
                    type="password"
                    register={register}
                    registerOptions={{
                        required: "Password is required",
                    }}
                    errors={errors}
                />
                <Buttons
                    type="submit"
                    className="bg-primary py-1 px-4 text-white hover:bg-secondary hover:text-primary"
                >
                    Sign in
                </Buttons>
            </form>
        </div>
    );
}

export default SignIn;

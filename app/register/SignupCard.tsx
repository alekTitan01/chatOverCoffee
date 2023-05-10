"use client";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import Buttons from "@components/Buttons";
import Inputs from "@components/forms/Inputs";
import PasswordValidationUI from "./PasswordValidationUI";

const passValidationInit = {
    numChar: false,
    capital: false,
    numerical: false,
    special: false,
    overall: false,
};

const SignupCard = () => {
    const form = useForm<FieldValues>();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const [passValidation, setPassValidation] = useState(passValidationInit);

    const validation = (value: string) => {
        let isNumChar = false;
        let isCapital = false;
        let isNumerical = false;
        let isSpecial = false;

        if (/.{8,}/.test(value)) {
            isNumChar = true;
        }

        if (/[A-Z]+/.test(value)) {
            isCapital = true;
        }

        if (/\d+/.test(value)) {
            isNumerical = true;
        }

        if (/[!@#$%^&*()\-\+=\[\]{}|\\;:'",.<>\/?]+/g.test(value)) {
            isSpecial = true;
        }

        setPassValidation({
            numChar: isNumChar,
            capital: isCapital,
            numerical: isNumerical,
            special: isSpecial,
            overall: isNumChar && isCapital && isNumerical && isSpecial,
        });

        return isNumChar && isCapital && isNumerical && isSpecial
            ? undefined
            : "";
    };

    const onRegistration = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <div className="py-8 px-16 registration-card rounded-lg">
            <h3 className="text-3xl text-secondary font-bold mb-1 w-full glass rounded-md py-2">
                Sign up
            </h3>
            <hr className="mb-6" />
            <form
                onSubmit={handleSubmit(onRegistration)}
                noValidate
                className="flex-center flex-col gap-4"
            >
                <Inputs
                    inputClass="input-register"
                    labelClass="input-label"
                    name="firstName"
                    label="First Name"
                    type="text"
                    register={register}
                    registerOptions={{
                        required: "First name is required",
                    }}
                    errors={errors}
                />
                <Inputs
                    inputClass="input-register"
                    labelClass="input-label"
                    name="lastName"
                    label="Last Name"
                    type="text"
                    register={register}
                    registerOptions={{
                        required: "Last name is required",
                    }}
                    errors={errors}
                />
                <Inputs
                    inputClass="input-register"
                    labelClass="input-label"
                    name="userName"
                    label="Username"
                    type="text"
                    register={register}
                    registerOptions={{
                        required: "Username is required",
                    }}
                    errors={errors}
                />
                <Inputs
                    inputClass="input-register"
                    labelClass="input-label"
                    name="email"
                    label="Email"
                    type="email"
                    register={register}
                    registerOptions={{
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid email format",
                        },
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
                    errors={errors}
                    registerOptions={{
                        validate: validation,
                    }}
                />
                <PasswordValidationUI validation={passValidation} />
                <Buttons
                    type="submit"
                    className="bg-primary py-1 px-4 text-white hover:bg-secondary hover:text-primary"
                >
                    Submit
                </Buttons>
            </form>
            <DevTool control={control} />
        </div>
    );
};

export default SignupCard;

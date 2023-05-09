import Buttons from "@components/Buttons";
import Inputs from "@components/forms/Inputs";
import React from "react";
import "@styles/registrationCard.css";

type Props = {};

const SignupCard = (props: Props) => {
    return (
        <div className="p-10 registration-card rounded-lg">
            <h3 className="text-3xl text-secondary font-bold mb-1 w-full glass rounded-md py-2">
                Sign up
            </h3>
            <hr className="mb-6" />
            <form className="flex-center flex-col gap-8">
                <Inputs
                    inputClass="input-register"
                    labelClass="input-label"
                    name="userName"
                    label="Username"
                    type="text"
                />
                <Inputs
                    inputClass="input-register"
                    labelClass="input-label"
                    name="email"
                    label="Email"
                    type="email"
                />
                <Inputs
                    inputClass="input-register"
                    labelClass="input-label"
                    name="password"
                    label="Password"
                    type="password"
                />
                <Buttons className="bg-primary py-1 px-4 text-white hover:bg-secondary hover:text-primary">
                    Submit
                </Buttons>
            </form>
        </div>
    );
};

export default SignupCard;

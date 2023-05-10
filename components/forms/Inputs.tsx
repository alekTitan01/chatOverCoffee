import { FormValues } from "@utils/types/formTypes";
import { UseFormRegister, RegisterOptions, FieldErrors } from "react-hook-form";

type Props = {
    name: "email" | "password" | "userName" | "firstName" | "lastName";
    label: string;
    type: string;
    inputClass?: string;
    labelClass?: string;
    register: UseFormRegister<FormValues>;
    registerOptions?: RegisterOptions<FormValues>;
    errors: FieldErrors<FormValues>;
};

const Inputs = ({
    name,
    label,
    type,
    inputClass = "",
    register,
    registerOptions,
    errors,
}: Props) => {
    const errorMessage = errors[name]?.message;
    return (
        <div className="inputBox">
            <input
                className={`${inputClass}`}
                type={type}
                id={name}
                placeholder={label}
                {...register(name, registerOptions)}
            />
            <span>{label}</span>
            {errorMessage ? (
                <p className="text-red-500 text-sm">{errorMessage}</p>
            ) : (
                <p className="text-white text-sm">Empty</p>
            )}
        </div>
    );
};

export default Inputs;

import { CSSProperties } from "react";

type Props = {
    name: string;
    label: string;
    type: string;
    inputClass?: string;
    labelClass?: string;
};

const Inputs = ({
    name,
    label,
    type,
    inputClass = "",
    labelClass = "",
}: Props) => {
    return (
        <div className="inputBox">
            <input
                className={`${inputClass}`}
                type={type}
                id={name}
                name={name}
                required
                placeholder={label}
            />
            <span>{label}</span>
        </div>
    );
};

export default Inputs;

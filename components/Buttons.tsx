import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
    type?: "submit" | "button" | "reset";
};

function Buttons({ children, className = "", type = "button" }: Props) {
    return (
        <button
            type={type}
            className={`font-bold rounded-md hover:transition-all ${className}`}
        >
            {children}
        </button>
    );
}

export default Buttons;

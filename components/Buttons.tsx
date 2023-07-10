"use client";

import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
    type?: "submit" | "button" | "reset";
    onClick?: () => void;
};

function Buttons({ children, className = "", type = "button", onClick = () => {} }: Props) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`font-bold rounded-md hover:transition-all ${className}`}
        >
            {children}
        </button>
    );
}

export default Buttons;

import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

function LinkingButton({ children, className = "" }: Props) {
    return (
        <button
            className={`bg-white text-primary font-bold px-5 py-2 rounded-md hover:bg-slate-500 hover:text-white hover:transition-all ${className}`}
        >
            {children}
        </button>
    );
}

export default LinkingButton;

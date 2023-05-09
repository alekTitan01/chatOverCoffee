import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

const GuestSectionContainer = ({ children, className }: Props) => {
    return (
        <section
            className={`w-full content gap-6 flex-col md:flex-row-reverse ${className}`}
        >
            {children}
        </section>
    );
};

export default GuestSectionContainer;

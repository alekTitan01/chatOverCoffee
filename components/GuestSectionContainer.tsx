import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const GuestSectionContainer = ({ children }: Props) => {
    return (
        <section className="w-full content gap-6 flex-center flex-col md:flex-row-reverse">
            {children}
        </section>
    );
};

export default GuestSectionContainer;

import React, { ReactNode } from "react";
import "@styles/global.css";
import Navigation from "@components/Navigation";

type Props = {
    children: ReactNode;
};

export const metadata = {
    title: "Chat over Coffee",
    description: "A coffee themed chat web application",
};

const RootLayout = ({ children }: Props) => {
    return (
        <html lang="en">
            <body>
                <main>
                    <Navigation />
                    <div className="content">{children}</div>
                </main>
            </body>
        </html>
    );
};

export default RootLayout;

import React, { ReactNode } from "react";
import Navigation from "@components/Navigation";
import "@styles/global.css";
import "@styles/layout.css";

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
            <body suppressHydrationWarning>
                <main>
                    <Navigation />
                    <div className="content">{children}</div>
                </main>
            </body>
        </html>
    );
};

export default RootLayout;

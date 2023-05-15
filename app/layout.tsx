import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import Navigation from "@components/Navigation";
import Provider from "@components/Provider";
import "@styles/global.css";

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
                <Provider>
                    <main>
                        <Navigation />
                        <div className="content">{children}</div>
                    </main>
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;

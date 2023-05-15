"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type Props = { children: ReactNode };

const Provider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;

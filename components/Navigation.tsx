"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import LinkingButton from "./Buttons";

type Props = {};

function Navigation({}: Props) {
    return (
        <div className="navigation flex-between">
            <Link href="/">
                <Image
                    src="/assets/images/logo.jpg"
                    alt="Chat over Coffee"
                    height={50}
                    width={50}
                />
            </Link>
            <div className="flex-between gap-10">
                <Link href="/login">
                    <div className="font-bold hover:text-secondary cursor-pointer hover:transition-all">
                        Sign In
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navigation;

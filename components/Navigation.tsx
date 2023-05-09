"use client";

import Image from "next/image";
import React from "react";
import LinkingButton from "./LinkingButton";

type Props = {};

function Navigation({}: Props) {
    return (
        <div className="navigation flex-between">
            <Image
                src="/assets/images/logo.jpg"
                alt="Chat over Coffee"
                height={50}
                width={50}
            />
            <div className="flex-between gap-10">
                <div className="font-bold hover:text-green-400 cursor-pointer hover:transition-all">
                    Sign In
                </div>
            </div>
        </div>
    );
}

export default Navigation;

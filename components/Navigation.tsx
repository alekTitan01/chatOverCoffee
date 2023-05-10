"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import SignIn from "./SignIn";

type Props = {};

function Navigation({}: Props) {
    const [isSignInOpen, setIsSignInOpen] = useState(false);
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
                <div
                    onClick={() => setIsSignInOpen(true)}
                    className="font-bold hover:text-secondary cursor-pointer hover:transition-all"
                >
                    Sign In
                </div>
            </div>
            <Modal open={isSignInOpen} onClose={() => setIsSignInOpen(false)}>
                <SignIn />
            </Modal>
        </div>
    );
}

export default Navigation;
